require 'rails_helper'

RSpec.describe Request, type: :model do
  it "has a valid factory" do
    request = build(:request)
    expect(request).to be_valid
  end

  it "is invalid without a title" do
    request = build(:request, title: nil)
    expect(request).to_not be_valid
  end
end
