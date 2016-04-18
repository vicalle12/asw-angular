class Reply < ActiveRecord::Base
  belongs_to :user
  belongs_to :contribution
  belongs_to :comment
  validates :user_id, presence: true
end
