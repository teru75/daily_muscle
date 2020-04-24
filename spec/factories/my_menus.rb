FactoryBot.define do
  factory :my_menu do
    part { Faker::Number.between(from: 0, to: 7) }
    theme { Faker::Lorem.characters(number:10) }
    customer
  end
end 