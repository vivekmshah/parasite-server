class NotesController < ApplicationController

  def index
    @notes = Note.all
    
    respond_to do |format|
      format.html {  }
      format.json { render json: @notes, status: :ok }
    end

  end

end