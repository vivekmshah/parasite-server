class NotesController < ApplicationController

  def index
    @notes = Note.get_multi(params[:domain])

    respond_to do |format|
      format.html {  }
      format.json { render json: @notes, status: :ok }
    end
  end

  def show
    @note = Note.find(params[:id])
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy

  end

  def note_params
    params.permit(:description, :domain, :path, :user_id)
  end





end