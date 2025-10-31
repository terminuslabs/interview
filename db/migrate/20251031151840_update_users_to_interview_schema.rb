class UpdateUsersToInterviewSchema < ActiveRecord::Migration[8.0]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    change_column_null :users, :email, false
    rename_column :users, :phone_number, :phone
    add_column :users, :role, :string, null: false, default: "employee"
    add_column :users, :department, :string
    add_column :users, :status, :string, null: false, default: "active"
    add_column :users, :last_login_at, :datetime
    add_column :users, :city, :string
    add_column :users, :state, :string
    add_column :users, :is_admin, :boolean, null: false, default: false
    add_index :users, :email, unique: true
    add_index :users, :role
    add_index :users, :status
  end
end
