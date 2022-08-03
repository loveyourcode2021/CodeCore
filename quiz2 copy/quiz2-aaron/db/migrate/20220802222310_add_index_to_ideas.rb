class AddIndexToIdeas < ActiveRecord::Migration[7.0]
  def change
    add_index :ideas, :title
    add_index :ideas, :description
  end
end
