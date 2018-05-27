class AuthenticateUser < Patterns::Service
  attr_accessor :errors, :authenticated_user

  def initialize(email, password)
    @email = email
    @password = password
    @errors = {}
    @authenticated_user = nil
  end
  
  def call
    @authenticated_user = user
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
    errors[:user_authentication] = 'invalid credentials'
    nil
  end
end