require 'rails_helper'

RSpec.describe FriendsController, type: :controller do
  describe 'GET #index' do

    subject { get :index }

    describe 'when request is unauthenticated' do
      include_examples 'controller rejects unauthenticated requests'
    end

    describe 'when request is authenticated', :logged_in do
      let(:user) { create(:user) }
      let!(:friend1) { create(:user) }
      let!(:friend2) { create(:user) }
      let!(:friendship_user_friend1) { create(:friendship, user: user, friend: friend1) }
      let!(:friendship_user_friend2) { create(:friendship, user: friend1, friend: user) }
      let!(:friendship_friend1_user) { create(:friendship, user: user, friend: friend2) }
      let!(:friendship_friend2_user) { create(:friendship, user: friend2, friend: user) }

      before { allow_any_instance_of(UserAuthenticationService).to receive(:current_user).and_return(user) }

      include_examples 'controller responds with correct status code', 200
    end
  end
end