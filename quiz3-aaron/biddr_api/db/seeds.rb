# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Bid.destroy_all
Auction.destroy_all
User.destroy_all
PASSWORD = "123"
admin = User.create(
    first_name: "admin",
    last_name: "user",
    email: "admin@user.com",
    password: PASSWORD
)

(10).times do
    User.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: Faker::Name.first_name + "@" + Faker::Name.last_name + ".com",
        password: PASSWORD
    )
end
users = User.all

20.times do |i|
    # t.string :title
    # t.text :description
    # t.float :reserve
    # t.date :ending

    auction= Auction.create(
        title: Faker::Cannabis.strain,
        description: Faker::Cannabis.health_benefit,
        reserve: rand(200.00),
        ending: Faker::Date.backward(days: 15),
        reserve_met:true,
        created_at: Faker::Date.backward(days: 30),
        updated_at: Faker::Date.backward(days: 30),
        user: users.sample
      )
      
    if auction.valid?
        auction.bids = rand(0..5).times.map do
            Bid.new(
                bid: rand(10..5000),
                user: users.sample
            )
        end
    end
end
bids = Bid.all
auctions = Auction.all

p "ADMIN EMAIL#{admin.email} ADMIN PASSWORD#{admin.password}"
p "AUCTION:#{auctions.count} BID:#{bids.count} USERS:#{users.count}"