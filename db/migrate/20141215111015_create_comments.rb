class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :description
      t.references :note, index: true
      t.references :user, index: true

      t.timestamps
    end
  end
end
