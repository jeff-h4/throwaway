require 'rails_helper'

RSpec.describe User, type: :model do
  it "has a valid factory" do
    user = build(:user)
    expect(user.valid?).to be true
  end

  it "is invalid without an email address" do
    user = build(:user, email: nil)
    expect(user).to_not be_valid
  end

  it "is invalid if email address is not unique" do
    create(:user, email: "fred@yahoo.com")
    user = build(:user, email: "fred@yahoo.com")
    expect(user).to_not be_valid
  end

  it "is invalid without a password" do
    user = build(:user, password: nil)
    expect(user).to_not be_valid
  end
end
