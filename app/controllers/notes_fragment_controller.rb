class NotesFragmentController < FragmentController
	def show
    @note = Note.get_multi(nil, params[:id]).first
	end

  def create
    note = Note.new(note_params)

    if note.save
      @note = Note.get_multi(nil, note.id).first
      render json: {info: render_to_string("layouts/_note.html.erb", locals: {note: @note}) }
      # render json: note, status: :ok 
    else
    end
  end

  def note_params
    params.permit(:description, :domain, :path, :user_id)
  end


end