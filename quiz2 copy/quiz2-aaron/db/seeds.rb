# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Idea.destroy_all
Review.destroy_all
User.destroy_all
Faker::Config.random = Random.new(60)
PASSWORD = '123'
User.create(
  first_name: "admin",
  last_name: "user",
  email: "admin@user.com",
  password: PASSWORD,
  is_admin: true
)

10.times do 
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
  User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name}@user.com",
    password: PASSWORD
  )
end
users = User.all
Faker::Config.random = Random.new(60)
20.times do
  i = Idea.new(
      title: Faker::Company.industry,
      description: Faker::Company.bs+Faker::Internet.email,
      user: users.sample
  )

  i.save
  if i.valid?
      rand(1..5).times do
          r = Review.new(
            body: Faker::Company.bs+ " " +Faker::Hipster.sentence,
            idea: i,
            user: users.sample,
            
            )
          i.likers = users.shuffle.slice(0, rand(users.count))
          r.save  
      end
  end
end
ideas = Idea.all
reviews = Review.all
like = Like.all
puts "Generated #{ideas.count} ideas"
puts "Generated #{reviews.count} reviews"
puts "Generated #{users.count} users"
puts "Generated #{like.count} likes"