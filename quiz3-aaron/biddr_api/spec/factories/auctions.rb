FactoryBot.define do
  factory :auction do
    title { "MyString" }
    description { "MyText" }
    reserve { 1.5 }
    ending { "2022-08-23" }
  end
end
