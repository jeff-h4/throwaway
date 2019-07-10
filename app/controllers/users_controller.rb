class UsersController < ApplicationController
  skip_before_action :authenticate_request, only: [:create]

  def create
    user = User.new(
      first_name: user_params[:first_name],
      last_name: user_params[:last_name],
      email: user_params[:email],
      password: user_params[:password]
      )

    if user.save
      render json: { user: user }
    else
      render json: { errors: user.errors }, status: :unprocessable_entity
    end
  end

  def index
    users = UserQueryService.new(current_user).fetch(search_params)
    render json: UserSerializer.new(users.to_a).serialized_json
  end

  def show
    user = User.find_by_id(params[:id])
    if user.present?
      render json: UserSerializer.new(user, include: include_params).serialized_json
    else
      head :not_found
    end
  end

  private

  def user_params
    params.dig(:data, :attributes)
  end

  def search_params
    params[:filter] || {}
  end

  def include_params
    return [] unless params[:include].present?
    sym_array = params[:include].split(',').map { |x| x.to_sym }
  end
end
