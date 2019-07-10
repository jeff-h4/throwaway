class FriendshipSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :user 
  belongs_to :friend, record_type: :user
end
