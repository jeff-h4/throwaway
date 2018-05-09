class ApplicationController < ActionController::Base
  before_action :authenticate_request
  attr_reader :current_user

  private

  def authenticate_request
    return if ENV["SKIP_AUTH"] == "1" and Rails.env.development?

    service = UserAuthenticationService.new(request.headers)
    authenticated = service.authenticate_request
    if authenticated
      @current_user = service.current_user
    else
      render json: { error: 'Not Authorized' }, status: 401
    end
  end
end
