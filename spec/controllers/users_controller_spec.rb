require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe 'POST #create' do
    let(:model_params) { { foo: 'bar' } }
    let(:params) { JsonApiParams.new(attribute_hash: model_params).params }

    subject { post :create, params: params }

    describe 'when user is saved' do
      before { allow_any_instance_of(User).to receive(:save).and_return(true) }

      it 'returns http success' do
        subject
        expect(response).to have_http_status(:success)
      end
    end

    describe 'when user fails to save' do
      before { allow_any_instance_of(User).to receive(:save).and_return(false) }

      it 'returns status code 422' do
        subject
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe 'GET #index' do
    let(:params) { { foo: 'bar' } }

    subject { get :index, params: params }

    describe 'when request is unauthenticated' do
      include_examples 'controller rejects unauthenticated requests'
    end

    describe 'when request is authenticated', :logged_in do
      include_examples 'controller responds with correct status code', 200
    end
  end

  describe 'GET #show' do
    let(:params) { { id: 0 } }

    subject { get :show, params: params }

    describe 'when request is unauthenticated' do
      include_examples 'controller rejects unauthenticated requests'
    end

    describe 'when request is authenticated', :logged_in do
      let!(:user) { create(:user) }

      describe 'when user was found' do
        let(:params) { { id: user.id } }
        include_examples 'controller responds with correct status code', 200
      end

      describe 'when user was not found' do
        let(:params) { { id: user.id + 1 } }
        include_examples 'controller responds with correct status code', 404
      end
    end
  end
end
