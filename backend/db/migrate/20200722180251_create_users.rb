class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.float :home_longitude
      t.float :home_latitude
      t.timestamps
    end
  end
end
