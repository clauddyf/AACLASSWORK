require 'rails_helper'

RSpec.describe User, type: :model do
 let (:invalid_user) {User.new(email:"",password:"clauddy")}
  it {should validate_presence_of(:email)}
  it {should validate_presence_of(:password_digest)}
  it {should validate_length_of(:password).is_at_least(6)}

  it {should validate_uniqueness_of(:email)}
    subject(:clauddy){User.create(
      email: "clauddy@aa.io",
      password: "iwantreesesfromangelanowrighthererighttime"
    )}

end




