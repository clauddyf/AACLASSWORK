class CreateCreateSecureRandoms < ActiveRecord::Migration[5.2]
  def change
    create_table :create_secure_randoms do |t|
      t.string :rando_code, null: false
      t.timestamps
    end
  end
end
