FactoryBot.define do
  now = Time.now
  factory :post do
    title "1 Butterknife"
    association :owner, factory: :user
    created_at now
    updated_at now
  end
end
