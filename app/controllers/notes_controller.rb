class NotesController < ApplicationController

  def index
    @notes = Note.all
    
    respond_to do |format|
      format.html {  }
      format.json { render json: @notes, status: :ok }
    end

  end

  def create

    # MISSING USER_ID WHEN USING API ENDPOINT -> 
    note = Note.new(note_params)

    respond_to do |format|
      if note.save
        format.html {  }
        format.json { render json: note, status: :created }
      else
        format.html {  }
        format.json { render json: note.errors, status: :unprocessable_entity }
      end
    end

  end

  def note_params
    params.require(:note).permit(:description)
  end


end