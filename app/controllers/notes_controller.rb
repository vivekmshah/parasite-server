class NotesController < ApplicationController

  def index

    if params[:domain]
      @notes = Note.where(domain: params[:domain])
    else
      @notes = Note.all
    end
    
    respond_to do |format|
      format.html {  }
      format.json { render json: @notes, status: :ok }
    end

  end

  def create
    @note = Note.new(note_params)

    respond_to do |format|
      if @note.save
        format.html {  }
        format.json { render json: @note, status: :created }
      else
        format.html {  }
        format.json { render json: @note.errors, status: :unprocessable_entity }
      end
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