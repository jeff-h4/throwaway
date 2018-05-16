class FriendshipsController < ApplicationController

  def create
    @friend = User.find_by(email: params[:email])

    if @friend.present?
      result = friendship_service.create_friendship(@current_user, @friend)
      head :created and return if result
    end
    head :bad_request
  end

  private
  
  def friendship_service
    FriendshipService
  end
end
