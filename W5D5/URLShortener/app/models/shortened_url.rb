class ShortenedUrl < ApplicationRecord
  validates :user_id, :short_url, :long_url, uniqueness: true, presence: true
  def self.secure_random
    Secure_random::urlsafe_base64
  end
end
