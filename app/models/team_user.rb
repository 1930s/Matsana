# == Schema Information
#
# Table name: teams_users
#
#  id         :bigint(8)        not null, primary key
#  team_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TeamUser < ApplicationRecord
  self.table_name = 'teams_users'

  belongs_to :team,
  primary_key: :id,
  foreign_key: :team_id,
  class_name: :Team

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User
end
