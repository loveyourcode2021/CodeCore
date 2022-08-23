class CreateAuctions < ActiveRecord::Migration[7.0]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :description
      t.float :reserve
      t.date :ending

      t.timestamps
    end
  end
end
