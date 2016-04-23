class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :password
      t.integer :created
      t.integer :karma
      t.string :about
      t.string :email
      t.boolean :showdead
      t.boolean :noprocrast
      t.integer :maxvisit
      t.integer :minaway
      t.integer :delay
      
      #cosas añadidas para twitter
      t.string :provider
      t.string :uid

      t.timestamps null: false
    end
  end
end
