class UsersController < ApplicationController
  skip_before_action :authenticate_request, only: [:create]

  def create
    user = User.new(
      first_name: user_post_params[:first_name],
      last_name: user_post_params[:last_name],
      email: user_post_params[:email],
      password: user_post_params[:password])

    if user.save
      render json: { user: user }
    else
      render json: { errors: user.errors }, status: :unprocessable_entity
    end
  end

  def index
    users = User.where(email: search_params[:email])
    if users.present?
      render json: UserSerializer.new(users.to_a).serialized_json
    else
      head :not_found
    end
  end

  private

  def user_post_params
    params[:data][:attributes]  
  end

  def search_params
    params[:filter]
  end
end
