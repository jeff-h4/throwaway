require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe "GET #create" do
    describe "when user is saved" do
      before { allow_any_instance_of(User).to receive(:save).and_return(true) }

      it "returns http success" do
        post :create
        expect(response).to have_http_status(:success)
      end
    end

    describe "when user fails to save" do
      before { allow_any_instance_of(User).to receive(:save).and_return(false) }

      it "returns status code 422" do
        post :create
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end
end
