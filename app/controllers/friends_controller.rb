class FriendsController < ApplicationController
  def index
    friends = current_user.friends
    render json: UserSerializer.new(friends.to_a).serialized_json
  end
end
