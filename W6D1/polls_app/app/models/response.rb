class Response < ApplicationRecord
  validates :user_id, :question_id, :answer_choice_id, presence: true
end
