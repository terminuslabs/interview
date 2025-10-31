500.times do
  User.create!(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    phone_number: Faker::PhoneNumber.phone_number,
    job: Faker::Job.title
  )
end
