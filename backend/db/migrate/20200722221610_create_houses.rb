class CreateHouses < ActiveRecord::Migration[6.0]
  def change
    create_table :houses do |t|
      t.string :name
      t.float :lat
      t.float :lng
      t.string :viewing_time
      t.string :viewing_date
      t.string :house_information
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
