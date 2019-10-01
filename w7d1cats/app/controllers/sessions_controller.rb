class SessionsController < ApplicationController

  
  def new
    render :new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username], 

      params[:user][:password]
    )
    
    if user
      login(user)
      redirect_to users_url
    else
      render json: 'session error', status: 401
    end
  end

  def destroy
    if !@current_user.nil
       @current_user.reset_session_token!
       session[:session_token] = nil
       redirect_to new_session_url
    else
      redirect_to new_session_url
    end
  end

end
