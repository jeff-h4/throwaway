class PostsController < ApplicationController
  def index
    posts = Post.all
    render json: PostSerializer.new(posts.to_a).serialized_json
  end
end
