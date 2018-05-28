class UserQueryService
  def initialize(current_user)
    @current_user = current_user
    @scope = User.all
  end

  def fetch(search_params)
    @scope = email_filter(search_params)
  end

  private

  def email_filter(search_params)
    return @scope unless search_params.dig(:email).present?
    @scope.where(email: search_params[:email])
  end
end
