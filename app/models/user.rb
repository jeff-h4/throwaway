class User < ApplicationRecord
  has_secure_password

  has_many :posts, foreign_key: 'owner_id'
  has_many :errands, foreign_key: 'actor_id', class_name: 'Post'
  has_many :friendships, foreign_key: 'user_id'
  has_many :friends, through: 'friendships'

  validates :email, presence: {message: "must be present"},
                    uniqueness: true,
                    format: /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
end
