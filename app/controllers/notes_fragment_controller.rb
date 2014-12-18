class NotesFragmentController < FragmentController

  helper_method :current_user

  def show
    @note = Note.get_multi(nil, params[:id]).first
	end

  def create

    require 'open-uri'

    noko_url = 'http://' + params[:domain] + params[:path]
    
    noko_title = Nokogiri::HTML(open(noko_url)).xpath("//title")[0].children[0].content

    note = Note.new(description: params[:description], domain: params[:domain], path: params[:path], user_id: params[:user_id], title: noko_title)
    # note = Note.new(params[:description], params[:domain], params[:path], params[:user_id])

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