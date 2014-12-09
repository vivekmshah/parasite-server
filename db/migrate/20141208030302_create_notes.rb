class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :description, :limit => 1000
      t.string :domain
      t.string :path, :limit => 300

      t.timestamps
    end
  end
end
