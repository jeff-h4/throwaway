class UserAuthenticationService
  attr_accessor :current_user
  attr_reader :headers

  def initialize(headers)
    @headers = headers
  end

  def authenticate_request
    @current_user = AuthorizeApiRequest.call(headers).result
    return @current_user.present?
  end
end
