require 'rails_helper'

RSpec.describe Friendship, type: :model do
  it "has a valid factory" do
    friendship = build(:friendship)
    expect(friendship).to be_valid
  end

  it "is invalid without a user" do
    friendship = build(:friendship, user: nil)
    expect(friendship).to_not be_valid
  end

  it "is invalid without a friend" do
    friendship = build(:friendship, friend: nil)
    expect(friendship).to_not be_valid
  end
end
