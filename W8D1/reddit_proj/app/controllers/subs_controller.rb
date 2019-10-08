class SubsController < ApplicationController
  before_action :require_login 
  
  def index
    @subs = Sub.all 
    render :index 
  end

  def create
    @sub = Sub.new(sub_params)
    @sub.moderator_id = current_user.id 
    if @sub.save 
      redirect_to sub_url(@sub)
    else 
      flash.now[:errors] = @sub.errors.full_messages 
      render :new 
    end

  end

  def new
    @sub = Sub.new
    render :new
  end

  def edit 
    @sub = Sub.find(params[:id])
    render :edit 
  end

  def update 
    @sub = Sub.find(params[:id])
    # find the thing 
    # update and if it updates successfully, then I want to return to the sub's page 
    # if it doesn't update succesfully, we need to flash/show some errors 
    if @sub.moderator_id == current_user.id  
      if @sub.update(sub_params)
        redirect_to sub_url(@sub)
      else 
        flash.now[:errors] = @sub.errors.full_messages
        render :edit 
      end
    else 
      flash.now[:errors] = @sub.errors.full_messages
      render :edit 
    end
  end

  def show 
    @sub = Sub.find(params[:id])
    render :show 
  end

  def sub_params
    self.params.require(:sub).permit(:title, :description)
  end


end
