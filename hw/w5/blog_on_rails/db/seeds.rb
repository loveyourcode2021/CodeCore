# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Post.destroy_all
Comment.destroy_all
Faker::Config.random = Random.new(60)
40.times do
   
    created_at = Faker::Date.backward(days: 0)
    posted_at = Faker::Date.backward(days: 0)

    p = Post.create(
        title: Faker::Company.industry,
        body: Faker::Internet.email+Faker::Internet.email,
        created_at: created_at,
        updated_at: created_at,
      )
    p "hello"
    if p.valid?
        rand(1..5).times do
          
          created_at = Faker::Date.backward(days: 0)
          posted_at = Faker::Date.backward(days: 0)
            Comment.create(
              body: Faker::Company.bs+Faker::Internet.email, 
              created_at: created_at,
              updated_at: created_at,
              post: p)
        end
    end
end

posts = Post.all
comments = Comment.all

puts "Generated #{posts.count} posts"
puts "Generated #{comments.count} posts"
