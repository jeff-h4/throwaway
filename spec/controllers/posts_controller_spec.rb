require 'rails_helper'

RSpec.describe PostsController, type: :controller do
  describe 'POST #create' do
    let(:model_params) { { foo: 'bar' } }
    let(:params) { JsonApiParams.new(attribute_hash: model_params).params }
    let(:user) { create(:user) }

    before { allow_any_instance_of(PostsController).to receive(:current_user).and_return(user) }

    subject { post :create, params: params }

    describe 'when request is unauthenticated' do
      include_examples 'controller rejects unauthenticated requests'
    end

    describe 'when request is authenticated', :logged_in do
      describe 'when post is saved' do
        before { allow_any_instance_of(Post).to receive(:save).and_return(true) }

        include_examples 'controller responds with correct status code', 201
      end

      describe 'when post fails to save' do
        before { allow_any_instance_of(Post).to receive(:save).and_return(false) }

        include_examples 'controller responds with correct status code', 422
      end
    end
  end

  describe 'GET #index' do
    subject { get :index }

    describe 'when request is unauthenticated' do
      include_examples 'controller rejects unauthenticated requests'
    end

    describe 'when request is authenticated', :logged_in do
      include_examples 'controller responds with correct status code', 200
    end
  end
end