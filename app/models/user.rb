# == Schema Information
#
# Table name: users
#
#  id            :integer          primary key
#  city          :text
#  department    :text
#  email         :text             not null
#  first_name    :text             not null
#  is_admin      :integer          default(0), not null
#  job           :text
#  last_login_at :datetime
#  last_name     :text             not null
#  phone         :text
#  role          :text             default("employee"), not null
#  state         :text
#  status        :text             default("active"), not null
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
