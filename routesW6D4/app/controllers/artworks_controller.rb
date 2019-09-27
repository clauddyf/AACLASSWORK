class ArtworksController < ApplicationController

  def index
    user = User.find_by(id: params[:user_id])
    art = user.artworks
    shared = user.shared_artworks
    render json: [art,shared]
    
  end

  def show
    art = Artwork.find_by(id: params[:id])
    render json: art
  end

  def create
    new_art = Artwork.new(artwork_params)
    if new_art.save
      render json: new_art
    else
      render json: new_art.errors.full_messages, status: 422
    end
  end

  def update
    found_art = Artwork.find_by(id: params[:id])
    if found_art.update(artwork_params)
      render json: found_art
    else
      render json: found_art.errors.full_messages, status: 422
    end
  end

  def destroy
    killed_art = Artwork.find_by(id: params[:id])
    if killed_art.destroy
      render json: killed_art
    else
      render json: killed_art.errors.full_messages, status: 404
    end
  end

  protected

  def artwork_params
    params.require(:artwork).permit(:title, :image_url, :artist_id)
  end
end
