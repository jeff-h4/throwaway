class FriendshipService

  def self.create_friendship(current_user, friend)
    forward_friendship = Friendship.new(user_id: current_user.id, friend_id: friend.id)
    backward_friendship = Friendship.new(user_id: friend.id, friend_id: current_user.id)

    Friendship.transaction do
      begin
        forward_friendship.save!
        backward_friendship.save!
      rescue ActiveRecord::Rollback, ActiveRecord::RecordNotUnique
        return false
      else
        return forward_friendship
      end
    end
  end
end
