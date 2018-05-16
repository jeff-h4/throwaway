class FriendshipService

  def self.create_friendship(current_user, friend)
    forward_friendship = Friendship.new(user_id: current_user.id, friend_id: friend.id)
    backward_friendship = Friendship.new(user_id: friend.id, friend_id: current_user.id)

    Friendship.transaction do
      forward_friendship.save!
      backward_friendship.save!
      return true
    end
    return false
  end
end
