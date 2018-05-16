require 'rails_helper'

RSpec.describe PostsController, type: :controller do
  describe "GET #index" do
    subject { get :index }

    describe "when request is unauthenticated" do
      include_examples "controller rejects unauthenticated requests"
    end

    describe "when request is authenticated", :logged_in do
      include_examples "controller responds with correct status code", 200
    end
  end
end
