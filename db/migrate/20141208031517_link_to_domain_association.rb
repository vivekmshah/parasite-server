class LinkToDomainAssociation < ActiveRecord::Migration
  def change
    add_column :links, :domain_id, :integer
  end
end
