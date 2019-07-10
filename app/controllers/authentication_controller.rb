class AuthenticationController < ApplicationController
  skip_before_action :authenticate_request
 
  def authenticate
    command = AuthenticateUser.call(params[:email], params[:password])

    if command.success?
      render json: {
        auth_token: command.result,
        user: command.authenticated_user.slice(:id, :first_name, :last_name, :email)
      }
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end
end