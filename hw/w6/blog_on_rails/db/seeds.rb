# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Post.destroy_all
Comment.destroy_all
User.destroy_all
PASSWORD = '123'
super_user = User.create(
  name: "admin",
  email: "admin@user.com",
  password: PASSWORD,
  is_admin: true
)
10.times do 
  name = Faker::Name.first_name
  User.create(
    name: name,
    email: "#{name}@user.com",
    password: PASSWORD,
  )
end
users = User.all
Faker::Config.random = Random.new(60)
40.times do


    p = Post.new(
        title: Faker::Company.industry,
        body: Faker::Company.bs+Faker::Internet.email, 
        user: users.sample
    )
    p.user = users.sample
    p.save
    if p.valid?
        rand(1..5).times do
 
            c = Comment.new(
              body: Faker::Company.bs+ " " +Faker::Hipster.sentence,
              )
            c.post = p
            c.user = users.sample
            c.save  
            p c.valid?
        end
    end
end
posts = Post.all
comments = Comment.all

puts "Generated #{posts.count} posts"
puts "Generated #{comments.count} comments"
puts "Generated #{users.count} users"