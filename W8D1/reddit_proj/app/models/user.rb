class User < ApplicationRecord
  validates :username, presence: true 
  validates :password_digest, presence: true 
  validates :session_token, presence: true 
  validates :password, length: { minimum: 8, allow_nil: true }

  after_initialize :ensure_session_token
  attr_reader :password
  
  has_many :posts,
  foreign_key: :author_id,
  class_name: :Post 

  has_many :subs,
  foreign_key: :moderator_id,
  class_name: :Sub   

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    if @user && @user.is_password?(password)
      @user 
    else 
      nil 
    end
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token 
    self.update!(session_token: SecureRandom.urlsafe_base64(16))
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def user_params 
    self.params.require(:user).permit(:username, :password)
  end
end
