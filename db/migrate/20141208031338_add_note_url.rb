class AddNoteUrl < ActiveRecord::Migration
  def change
    add_column :notes, :link_id, :integer
  end
end
