# require 'uri'

class NotesFragmentController < FragmentController

  helper_method :current_user

  def show
    @note = Note.get_multi(nil, params[:id]).first
	end

  def create

    # full_url = params[:domain]
    # note = Note.new(params[:user_id], params[:description], )

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

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id] 
  end

end