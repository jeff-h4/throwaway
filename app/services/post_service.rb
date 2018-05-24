class PostService
  def initialize(current_user, params)
    @current_user = current_user
    @params = params
  end

  def update(post_id)
    @post = Post.find_by_id(post_id)
    return nil if @post.nil?
    # Update the title
    result = update_post_title
    return nil unless result
    result = update_post_status
    return nil unless result
    @post.update
  end

  def update_post_title
    return false if @post.owner_id != @current_user.id
    @post.title = input_params[:title]
    true
  end

  def update_post_status
    return false unless valid_status.include? @params[:status]
    return false unless [@post.owner_id, @post.actor_id].include? @current_user.id
    begin
      case @params[:status]
      when 'open'
        nil
      when 'accepted'
        @post.accept
      when 'accomplished'
        @post.accomplish
      when 'closed'
        @post.close
      when 'cancelled'
        @post.cancel
      end
    rescue AASM::InvalidTransition
      return false
    end
    true
  end
end
