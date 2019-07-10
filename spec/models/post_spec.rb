require 'rails_helper'

RSpec.describe Post, type: :model do
  it 'has a valid factory' do
    post = build(:post)
    expect(post).to be_valid
  end

  it 'is invalid without a title' do
    post = build(:post, title: nil)
    expect(post).to_not be_valid
  end

  it 'is invalid without an owner' do
    post = build(:post, title: "I don't have an owner", owner: nil)
    expect(post).to_not be_valid
  end

  describe 'status state machine' do
    describe 'when in open status' do
      let(:post) { build(:post) }

      it 'can only transition to allowable states' do
        expect(post).to allow_event :accept
        expect(post).to allow_event :cancel
      end

      it 'forbids unpermitted state transitions' do
        expect(post).not_to allow_event :accomplish
        expect(post).not_to allow_event :close
      end
    end

    describe 'when in accepted status' do
      let(:post) { build(:post, status: Post::STATE_ACCEPTED) }

      it 'can only transition to allowable states' do
        expect(post).to allow_event :accomplish
        expect(post).to allow_event :cancel
      end

      it 'forbids unpermitted state transitions' do
        expect(post).not_to allow_event :accept
        expect(post).not_to allow_event :close
      end
    end

    describe 'when in accomplished status' do
      let(:post) { build(:post, status: Post::STATE_ACCOMPLISHED) }

      it 'can only transition to allowable states' do
        expect(post).to allow_event :close
      end

      it 'forbids unpermitted state transitions' do
        expect(post).not_to allow_event :accept
        expect(post).not_to allow_event :accomplish
        expect(post).not_to allow_event :cancel
      end
    end

    describe 'when in closed status' do
      let(:post) { build(:post, status: Post::STATE_CLOSED) }

      it 'forbids unpermitted state transitions' do
        expect(post).not_to allow_event :accept
        expect(post).not_to allow_event :accomplish
        expect(post).not_to allow_event :close
        expect(post).not_to allow_event :cancel
      end
    end

    describe 'when in cancelled status' do
      let(:post) { build(:post, status: Post::STATE_CANCELLED) }

      it 'forbids unpermitted state transitions' do
        expect(post).not_to allow_event :accept
        expect(post).not_to allow_event :accomplish
        expect(post).not_to allow_event :close
        expect(post).not_to allow_event :cancel
      end
    end
  end
end
