FactoryBot.define do
  factory :idea do
    sequence(:title){|n| Faker::Company.industry+ "#{n}"}
    description {Faker::Hipster.sentence}
  end
end
