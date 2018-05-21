require 'rails_helper'

RSpec.describe FriendshipsController, type: :controller do

  describe "POST #create" do
    let(:params) { {} }

    subject { post :create, params: params }

    describe "when request is unauthenticated" do
      include_examples "controller rejects unauthenticated requests"
    end

    describe "when request is authenticated", :logged_in do
      let(:friendship_service) { class_double("FriendshipService") }
      let!(:user) { create(:user) }

      before do
        allow_any_instance_of(FriendshipsController).to receive(:friendship_service).and_return(friendship_service)
        allow_any_instance_of(FriendshipsController).to receive(:current_user).and_return(user)
      end

      describe "when user matching friend_id is found" do
        let!(:friend) { create(:user)}
        let(:friend_params) { JsonApiParams.new({ id: friend.id, type_name: "friend" }) }
        let(:friendship_params ) { JsonApiParams.new({ relationship_hash: { friend: friend_params.params } }) }
        let(:params) { friendship_params.params }
        let(:friendship) { create(:friendship, user: user, friend: friend) }

        describe "when saving friendship is successful" do
          before { allow(friendship_service).to receive(:create_friendship).and_return(friendship) }
          include_examples "controller responds with correct status code", 201
        end

        describe "when saving friendship fails" do
          before { allow(friendship_service).to receive(:create_friendship).and_return(false) }

          include_examples "controller responds with correct status code", 400
        end
      end

      describe "when user matching friend_id param is not found" do
        let(:friend_params) { JsonApiParams.new({ id: nil, type_name: "friend" }) }
        let(:friendship_params ) { JsonApiParams.new({ relationship_hash: { friend: friend_params.params } }) }
        let(:params) { friendship_params.params }

        include_examples "controller responds with correct status code", 400
      end
    end
  end
end
