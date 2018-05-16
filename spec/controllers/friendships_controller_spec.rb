require 'rails_helper'

RSpec.describe FriendshipsController, type: :controller do

  describe "POST #create" do
    let(:params) { {} }

    subject { post :create, params: params }

    describe "when request is unauthenticated" do
      include_examples "controller rejects unauthenticated requests"
    end

    describe "when request is authenticated", :logged_in do
      let(:friendship_service) { instance_double("FriendshipService") }

      before { allow_any_instance_of(FriendshipsController).to receive(:friendship_service).and_return(friendship_service) }

      describe "when user matching email param is found" do
        let(:friend_email) { "fredflintstone@gmail.com" }
        let(:params) { { email: friend_email } } 
        let!(:friend) { create(:user, email: friend_email)}

        describe "when saving friendship is successful" do
          before { allow(friendship_service).to receive(:create_friendship).and_return(true) }

          include_examples "controller responds with correct status code", 201
        end

        describe "when saving friendship fails" do
          before { allow(friendship_service).to receive(:create_friendship).and_return(false) }

          include_examples "controller responds with correct status code", 400
        end
      end

      describe "when user matching email param is not found" do
        let(:friend_email) { "does_not@exist.com" }
        let(:params) { { email: friend_email } }

        include_examples "controller responds with correct status code", 400
      end

      describe "when no email is provided" do
        include_examples "controller responds with correct status code", 400
      end
    end
  end
end
