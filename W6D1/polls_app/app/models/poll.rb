class Poll < ApplicationRecord
  validates :title, :user_id, presence: true
end
