class FriendshipsController < ApplicationController

  def create
    @friend = User.find_by_id(friend_id_from_params)

    if @friend.present?
      friendship = friendship_service.create_friendship(@current_user, @friend)
      if friendship.present?
        render json: FriendshipSerializer.new(friendship).serialized_json, status: :created
        return
      end
    end
    head :bad_request
  end

  private
  
  def friendship_service
    FriendshipService
  end

  def friend_id_from_params
    params.dig(:data,:relationships,:friend,:data,:id)
  end
end
