class RenameColumn < ActiveRecord::Migration
 def self.up
   rename_column :users, :user, :name
 end

 def self.down
   # rename back if you need
 end
end
