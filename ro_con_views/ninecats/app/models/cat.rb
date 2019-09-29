require 'date'
require 'action_view'

class Cat < ApplicationRecord
  include ActionView::Helpers::DateHelper
  COLORS = %w(Orange Black White Yellow)
  GENDER = %w(M F)

  validates :name, presence: true
  validates :sex, presence: true, inclusion: GENDER
  validates :birth_date, presence: true
  validates :description, presence: true
  validates :color, inclusion: COLORS


  def age
    include ActionView::Helpers::DateHelper
    old = time_ago_in_words(self.birth_date)
    p old

  end
end
