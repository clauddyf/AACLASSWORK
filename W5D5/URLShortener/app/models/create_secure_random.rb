class CreateSecureRandom < ApplicationRecord
  validates :rando_code, uniqueness: true, presence: true
end
