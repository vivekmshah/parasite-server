class NotesController < ApplicationController

  def index
    @notes = Note.get_multi(params[:domain])

    respond_to do |format|
      format.html {  }
      format.json { render json: @notes, status: :ok }
    end

    @links = Note.find_by_sql([
      'SELECT n.domain, n.path, n.title, COUNT(*) AS count from notes as n INNER JOIN comments as c ON n.id=c.note_id WHERE n.domain = ? GROUP BY n.domain, n.path, n.title ORDER BY 2 DESC LIMIT 5', params[:domain]
      ])

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