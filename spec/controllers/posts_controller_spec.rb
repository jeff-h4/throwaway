require 'rails_helper'

RSpec.describe PostsController, type: :controller do
  describe "GET #index" do
    describe "when user is authorized", :logged_in do
      it "returns http success" do
        get :index
        expect(response).to have_http_status(:success)
      end
    end

    describe "when user is unauthorized" do
      it "returns http unauthorized" do
        get :index
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end
end
