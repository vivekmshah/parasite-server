class SessionsController < ApplicationController

def new

end

  def create
      user = User.where(username: params[:username]).first
      # first make sure we actually find a user
      # then see if user authenticates
      if user && user.authenticate(params[:password])
          # sets the cookie to the browser
          session[:user_id] = user.id
          redirect_to notes_path
      else
          # flash.now.alert = "Email or password is invalid"
          render "new"
          # redirect_to new_session_path
      end
  end

  def destroy
      # Kill cookies!
      reset_session
      redirect_to :back
  end
end