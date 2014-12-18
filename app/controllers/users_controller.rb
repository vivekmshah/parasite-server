class UsersController < ApplicationController

  # before_action :set_user, only: [:show, :edit, :update, :destroy]

  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
    @notes = Note.all
    @comments = Comment.all
  end

  def edit
  end

  def index
    @users = User.all
  end

  def create

    user = User.new(user_params)
    
    if user.save
      session[:user_id] = user.id
      render json: {login: true, user_id: user.id}
    else
      render json: {login: false}
    end

  end

  def update
    @user.update_attributes(user_params)
  end

  def destroy
    @user.destroy
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

end