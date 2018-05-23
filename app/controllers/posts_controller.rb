class PostsController < ApplicationController
  def create
    post = Post.new(
      title: post_params[:title],
      status: Post::STATE_OPEN,
      owner_id: current_user.id,
      actor_id: nil
    )
    if post.save
      render json: PostSerializer.new(post).serialized_json, status: :created
    else
      render json: { errors: post.errors }, status: :unprocessable_entity
    end
  end

  def index
    posts = Post.all
    render json: PostSerializer.new(posts.to_a).serialized_json
  end

  private

  def post_params
    params.dig(:data,:attributes)
  end
end
