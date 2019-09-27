class ArtworkSharesController < ApplicationController
  def create
    share = ArtworkShare.new(artwork_share_params)
    if share.save
      render json: share
    else
      render json: share.errors.full_messages, status: 422
    end  
  end


  def destroy
    art_share = ArtworkShare.find_by(id: params[:id])
    if art_share.destroy
      render json: art_share
    else
      render json: art_share.errors.full_messages, status: 404
    end
  end

  protected
  def artwork_share_params
    params.require(:artwork_share).permit(:artwork_id, :viewer_id)
  end
end
