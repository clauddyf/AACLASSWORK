class UsersController < ApplicationController

  def index
    all_of_em = User.all

    render json: all_of_em
  end

  def show
    specific = User.find_by(id: params[:id])
    render json: specific
  end

  def create
    guy = User.new(user_params)
    if guy.save
      render json: guy
    else
      render json: guy.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    guy = User.find_by(id: params[:id])
    if guy.update(user_params)
      render json: guy
    else
      render json: guy.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    guy = User.find_by(id: params[:id])
    if guy
      guy.destroy
      render json: guy 
    else
      render json: guy.errors.full_messages, status: 404
    end
  end
   
  
  # def update
  #   if User.update(params[:id], username: params[:user][:username])
  #     guy = User.find(params[:id])
  #     render json: guy
  #   else
  #     render json: guy.errors.full_messages, status: :unprocessable_entity
  #   end
  # end
  
  private
  
  def user_params
    params.require(:user).permit(:username)
  end

end