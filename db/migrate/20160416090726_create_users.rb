class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :user
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

      t.timestamps null: false
    end
  end
end
