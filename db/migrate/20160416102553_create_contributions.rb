class CreateContributions < ActiveRecord::Migration
  def change
    create_table :contributions do |t|
      t.string :titulo
      t.references :user, index: true, foreign_key: true
      t.string :url
      t.string :fecha
      t.integer :puntos
      t.string :comentarios
      t.string :tipo
      t.string :text

      t.timestamps null: false
    end
    add_index :contributions, [:user_id, :created_at]
  end
end

