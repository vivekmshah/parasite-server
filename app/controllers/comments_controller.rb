class CommentsController < ApplicationController

def show
    @comment = Comment.get_multi(nil, params[:id]).first
end

def create
    comment = Comment.new(comment_params)

      if comment.save
        render json: comment, status: :ok
      else
     end
  
  end

  def comment_params
      params.permit(:description, :note_id, :user_id)
  end

end