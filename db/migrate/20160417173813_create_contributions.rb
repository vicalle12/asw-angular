class CreateContributions < ActiveRecord::Migration
  def change 
    create_table :contributions do |t| 
      t.string :titulo 
      t.references :user_id, index: true, foreign_key: true
      t.string :url 
      t.integer :puntos 
      t.text :comentarios 
      t.string :tipo 
      t.text :text 
      
      t.timestamps null: false 
    end
    add_index :contributions, [:user_id, :created_at]
  end
end
