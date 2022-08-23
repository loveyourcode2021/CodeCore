class AddReserveMetToAuction < ActiveRecord::Migration[7.0]
  def change
    add_column :auctions, :reserve_met, :boolean
  end
end
