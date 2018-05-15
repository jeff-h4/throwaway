class Post < ApplicationRecord
  belongs_to :actor, class_name: 'User', required: false
  belongs_to :owner, class_name: 'User'

  validates :title, presence: { message: "must be present" }
  validates :owner, presence: { message: "must be assigned" }
end
