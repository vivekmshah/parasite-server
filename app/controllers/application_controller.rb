class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  helper_method :current_user

  before_filter :cors_preflight_check, :allow_iframe_requests
  after_filter :cors_set_access_control_headers
 
  def cors_set_access_control_headers
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, OPTIONS'
    headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
    headers['Access-Control-Max-Age'] = "1728000"
  end
 
  def cors_preflight_check
    if request.method == 'OPTIONS'
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, OPTIONS'
      headers['Access-Control-Allow-Headers'] = 'ALLOWALL'
      headers['Access-Control-Max-Age'] = '1728000'
 
      render :text => '', :content_type => 'text/plain'
    end
  end

def allow_iframe_requests
  response.headers.delete('X-Frame-Options')
end


  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id] 
  end

end
