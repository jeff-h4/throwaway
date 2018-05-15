FactoryBot.define do
  now = Time.now
  factory :friendship do
    association :user, strategy: :build
    association :friend, factory: :user, strategy: :build
    created_at now
    updated_at now
  end
end
