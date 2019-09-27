class AddIndicesToArtworkShare < ActiveRecord::Migration[5.2]
  def change
    add_index :artwork_shares, [:artwork_id , :viewer_id], unique: true
    add_index :artwork_shares, :artwork_id
    add_index :artwork_shares, :viewer_id
  end
end
