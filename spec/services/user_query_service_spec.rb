require 'rails_helper'

RSpec.describe UserQueryService, type: :service do
  let(:current_user) { build_stubbed(:user) }

  describe '#fetch' do
    let(:service) { UserQueryService.new(current_user) }
    let!(:user1) { create(:user, email: 'apple@mail.com') }
    let!(:user2) { create(:user, email: 'banana@mail.com') }
    let!(:user3) { create(:user, email: 'carrot@mail.com') }
    let(:search_params) { {} }

    subject { service.fetch(search_params).to_a }

    describe 'when no search parameters are given' do
      it 'returns all users' do
        expect(subject).to eq([user1, user2, user3])
      end
    end

    describe 'when email filter is supplied' do
      let(:search_params) { { email: user2.email } }

      it 'returns the correct user entries' do
        expect(subject).to eq([user2])
      end
    end
  end
end
