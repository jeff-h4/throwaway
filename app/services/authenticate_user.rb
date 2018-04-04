class AuthenticateUser < Patterns::Service
  attr_accessor :errors

  def initialize(email, password)
    @email = email
    @password = password
    @errors = {}
  end
  
  def call
    JsonWebToken.encode(user_id: user.id) if user
  end
 
  def success?
    !errors.any?
  end

  private

  attr_accessor :email, :password

  def user
    user = User.find_by_email(email)
    return user if user && user.authenticate(password)
    errors.merge! user_authentication: 'invalid credentials'
    nil
  end
end