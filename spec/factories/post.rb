FactoryBot.define do
  now = Time.now
  factory :post do
    title "1 Butterknife"
    status 0
    association :actor, factory: :user, strategy: :build
    association :owner, factory: :user, strategy: :build
    created_at now
    updated_at now
  end
end
