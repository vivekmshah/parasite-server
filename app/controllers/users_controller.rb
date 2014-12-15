class UsersController < ApplicationController


  before_action :set_user, only: [:show, :edit, :update, :destroy]

  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
    respond_to do |format|
      format.html {  }
      format.json { render json: @user, status: :ok }
    end
  end

  def edit
  end

  def index
    @users = User.all
    respond_to do |format|
      format.html {  }
      format.json { render json: @users, status: :ok }
    end
  end

def create
  @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        id = User.last[:id]
        redirect_to user_path(id)
        # format.html {  }
        format.json { render json: @user, status: :created }
      else
        format.html {  }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end
  





  def update
    @user.update_attributes(user_params)
  end

  def destroy
    @user.destroy
  end

  private

  def set_user
      @user = User.find(params[:id])
    end

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end


end