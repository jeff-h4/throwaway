class Post < ApplicationRecord
  validates :title, presence: { message: "must be present"}
end
