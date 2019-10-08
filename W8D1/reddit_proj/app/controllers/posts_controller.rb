class PostsController < ApplicationController
  before_action :require_login 

  def new
    @post = Post.new 
    render :new 
  end

  def edit 
    @post = Post.find(params[:id])
    render :edit 
  end

  def show 
    @post = Post.find(params[:id])
    render :show 
  end

  def create 
    @post = Post.new(post_params)
    @post.author_id = current_user.id   

    if @post.save 
      redirect_to sub_url(@post.sub_id)
    else 
      flash.now[:errors] = @post.errors.full_messages 
      render :new 
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.author_id == current_user.id && @post.update(post_params)
      redirect_to sub_url(@post.sub_id)
    else
      flash[:errors] = @post.errors.full_messages
      render :edit
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.author_id == current_user.id
      @post.destroy 
    else
      flash[:errors] = @post.errors.full_messages
    end
    redirect_to sub_url(@post.sub_id)
  end

  def post_params
    self.params.require(:post).permit(:title, :content, :sub_id) #since no nesting, we need to permit it here so we can pass it later into the form 
  end
end
