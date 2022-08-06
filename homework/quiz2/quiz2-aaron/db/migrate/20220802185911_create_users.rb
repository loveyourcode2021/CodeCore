class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.text :first_name
      t.text :last_name
      t.text :email
      t.text :password_digest
      t.boolean :is_admin
      t.timestamps
    end
  end
end
