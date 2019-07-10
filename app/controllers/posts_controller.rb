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

  def update
    updated_post = post_service.update(params[:id])
    if updated_post
      render json: PostSerializer.new(updated_post).serialized_json, status: :ok
    else
      head :bad_request
    end
  end

  private

  def post_params
    params.dig(:data, :attributes)
  end

  def post_service
    @post_service ||= PostService.new(current_user, post_params)
  end
end
