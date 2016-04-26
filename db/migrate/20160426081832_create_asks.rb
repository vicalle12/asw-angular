class CreateAsks < ActiveRecord::Migration
  def change
    create_table :asks do |t|
      t.string :titulo
      t.references :user, index: true, foreign_key: true
      t.integer :puntos 
      t.text :text 
      t.timestamps null: false
    end
    add_index :asks, [:user_id, :created_at]
  end
end
