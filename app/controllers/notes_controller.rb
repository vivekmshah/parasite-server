class NotesController < ApplicationController

  def index
    # @user = User.all
    if params[:domain]
      @notes = Note.where(domain: params[:domain])
    else
      @notes = Note.find_by_sql([
      'SELECT notes.id, notes.user_id, notes.description, notes.created_at, users.username ' +
      'FROM notes ' +
      'INNER JOIN users ' +
      'ON notes.user_id = users.id '
      ])
    end
    



    respond_to do |format|
      format.html {  }
      format.json { render json: @notes, status: :ok }
    end

  end

  def show
    @note = Note.find(params[:id])
  end

  def create
    note = Note.new(note_params)

      if note.save
        redirect_to notes_path
      else
      end
  
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy

  end

  def note_params
    params.permit(:description, :domain, :path, :user_id)
  end


end