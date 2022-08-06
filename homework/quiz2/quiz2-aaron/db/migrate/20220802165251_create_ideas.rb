class CreateIdeas < ActiveRecord::Migration[7.0]
  def change
    create_table :ideas do |t|
      t.text :title
      t.text :description

      t.timestamps
    end
  end
end
