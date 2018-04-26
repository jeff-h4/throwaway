class UsersController < ApplicationController
  skip_before_action :authenticate_request, only: [:create]

  def create
    user = User.new(email: params[:email], password: params[:password])
    if user.save
      render json: { user: user }
    else
      render json: { errors: user.errors }, status: :unprocessable_entity
    end
  end
end
