class AuthorizeApiRequest < Patterns::Service 
  attr_accessor :errors

  def initialize(headers = {})
    @headers = headers
    @errors = {}
  end

  def call
    user
  end

  def success?
    !errors.any?
  end

  private

  attr_reader :headers

  def user
    @user ||= User.find(decoded_auth_token[:user_id]) if decoded_auth_token
    @user || errors.merge(token: 'Invalid token') && nil
  end

  def decoded_auth_token
    @decoded_auth_token ||= JsonWebToken.decode(http_auth_header)
  end

  def http_auth_header
    if headers['Authorization'].present?
      return headers['Authorization'].split(' ').last
    else
      errors.merge! token: 'Missing token'
    end 
    nil 
  end
end