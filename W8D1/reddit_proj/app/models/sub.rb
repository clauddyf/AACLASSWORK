class Sub < ApplicationRecord
  validates :title, :description, :moderator_id, presence: true

  belongs_to :moderator,
  foreign_key: :moderator_id,
  class_name: :User 

  has_many :posts, 
  foreign_key: :sub_id,
  class_name: :Post 

  has_many :postsubs,
    foreign_key: :sub_id,
    class_name: :Postsub  

  has_many :posts ,
    through :postsubs,
    source :post
end
