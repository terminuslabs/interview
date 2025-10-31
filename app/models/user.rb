# == Schema Information
#
# Table name: users
#
#  id           :integer          not null, primary key
#  email        :string
#  job          :string
#  name         :string
#  phone_number :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class User < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :phone_number, presence: true
  validates :job, presence: true
end
