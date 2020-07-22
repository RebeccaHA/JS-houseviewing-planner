class CreateHouses < ActiveRecord::Migration[6.0]
  def change
    create_table :houses do |t|
      t.string :name
      t.string :house_coordinates
      t.string :house_information
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
