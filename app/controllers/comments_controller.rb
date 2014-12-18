class CommentsController < ApplicationController

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