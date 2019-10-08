class Post < ApplicationRecord
  validates :title, presence: true

  belongs_to :sub,
  foreign_key: :sub_id,
  class_name: :Sub  
  
  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User  

  has_many :postsubs,
    foreign_key: :post_id,
    class_name: :Postsub  
    
  has_many :subs,
    through :postsubs,
    source :sub
end
