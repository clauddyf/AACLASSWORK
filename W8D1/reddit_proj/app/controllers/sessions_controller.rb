class SessionsController < ApplicationController
  
  def new
    render :new
  end

  def create
    username = params[:user][:username]
    password = params[:user][:password]
    @user = User.find_by_credentials(username,password)
    if @user
      login(@user)
      redirect_to some_page
    else
      flash[:errors] = "Dammit you cant sign in"
      render :new
    end
  end

  def destroy
    logged_out
    redirect_to new_session_url
  end

end
