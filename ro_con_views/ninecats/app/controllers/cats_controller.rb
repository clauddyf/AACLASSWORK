class CatsController < ApplicationController

  def index
    kitten = Cat.all
    render json: kitten
  end

  def show
    kitten = Cat.find_by(id: params[:id])
    render json: kitten
  end
  
  def new
    @kitten = Cat.new
    render :new
  end

  



end
