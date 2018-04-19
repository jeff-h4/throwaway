class Request < ApplicationRecord
  validates :title, presence: { message: "must be present"}
end
