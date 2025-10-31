# == Schema Information
#
# Table name: users
#
#  id            :integer          not null, primary key
#  city          :string
#  department    :string
#  email         :string           not null
#  first_name    :string
#  is_admin      :boolean          default(FALSE), not null
#  job           :string
#  last_login_at :datetime
#  last_name     :string
#  name          :string
#  phone         :string
#  role          :string           default("employee"), not null
#  state         :string
#  status        :string           default("active"), not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
# Indexes
#
#  index_users_on_email   (email) UNIQUE
#  index_users_on_role    (role)
#  index_users_on_status  (status)
#
class User < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :phone, presence: true
  validates :job, presence: true
end
