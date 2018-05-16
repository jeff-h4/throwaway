require 'rails_helper'

RSpec.describe FriendshipService, type: :service do

  describe "#create_friendship" do
    let!(:user) { create(:user) }
    let!(:friend) { create(:user) }
    let(:service) { FriendshipService }

    subject { service.create_friendship(user, friend) }

    describe "when saving one friendship fails" do
      before { allow_any_instance_of(Friendship).to receive(:save!).and_raise ActiveRecord::Rollback}

      it "returns false" do
        expect(subject).to be false
      end

      it "does not save any friendships" do
        pending "Don't have a way to check this because save! is stubbed"
        fail
      end
    end

    describe "when saving both forward and backward friendships succeeds" do
      it "returns true" do
        expect(subject).to be true
      end

      it "saves two friendships" do
        subject
        expect(Friendship.count).to eq 2
      end
    end
  end
end
