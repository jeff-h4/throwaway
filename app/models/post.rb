class Post < ApplicationRecord
  include AASM

  belongs_to :actor, class_name: 'User', required: false
  belongs_to :owner, class_name: 'User'

  validates :title, presence: { message: 'must be present' }
  validates :owner, presence: { message: 'must be assigned' }
  validates :status, presence: { message: 'must be assigned' }

  enum status: {
    open: 0,
    accepted: 1,
    accomplished: 2,
    closed: 3,
    cancelled: 4
  }

  aasm column: :status, enum: true do
    state :open, initial: true
    state :accepted
    state :accomplished
    state :closed
    state :cancelled

    event :accept do
      transitions from: :open, to: :accepted
    end

    event :accomplish do
      transitions from: :accepted, to: :accomplished
    end

    event :close do
      transitions from: :accomplished, to: :closed
    end

    event :cancel do
      transitions from: :open, to: :cancelled
      transitions from: :accepted, to: :cancelled
    end
  end
end
