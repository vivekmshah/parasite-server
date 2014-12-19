class CommentsFragmentController < FragmentController

  helper_method :current_user

  def show
    @comment = Comment.all
  end

  def create
    comment = Comment.new(comment_params)
    if comment.save
     
      render json: {info: render_to_string("layouts/_comment.html.erb", locals: {comment: comment}) }
      # render json: comment, status: :ok 
    else
    end
  end

  def comment_params
    params.permit(:description, :note_id, :user_id)
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id] 
  end

end
