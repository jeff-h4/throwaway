require 'rails_helper'

RSpec.describe Post, type: :model do
  it "has a valid factory" do
    post = build(:post)
    expect(post).to be_valid
  end

  it "is invalid without a title" do
    post = build(:post, title: nil)
    expect(post).to_not be_valid
  end
end
