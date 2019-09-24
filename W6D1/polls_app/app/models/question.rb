class Question < ApplicationRecord
  validates :poll_id, :body, presence: true
end
