class CommentsController < ApplicationController

def create
    comment = Comment.new(comment_params)

      if comment.save
        redirect_to note_path(params[:note_id])
      else
      end
  
  end

  def comment_params
      params.permit(:description, :note_id, :user_id)
  end

end