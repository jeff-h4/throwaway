class ApplicationController < ActionController::Base
  before_action :authenticate_request
  skip_before_action :authenticate_request if ENV["SKIP_AUTH"] == "1" and Rails.env.development?
  attr_reader :current_user

  private

  def authenticate_request
    binding.pry
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: { error: 'Not Authorized' }, status: 401 unless @current_user
  end
end
