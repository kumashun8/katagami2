class AddUserEmailToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :user_email, :string, null: false
  end
end
