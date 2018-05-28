class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :first_name, :last_name, :email
  has_many :friends, record_type: :user, serializer: 'UserSerializer'
end
