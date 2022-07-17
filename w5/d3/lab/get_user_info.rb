=begin
Create a method, get_user_info, that when called asks the user for the following personal information: first name, last name, city of birth and age. Then, return that information as a hash.

get_user_info
# Prompts the user a bunch of times for their information
# => { first_name: "Jon", last_name: "Snow", city_of_birth: "Winterfell", age: 26 }
=end

def get_user_info()
    h = { "first_name"=> nil, "last_name"=> nil, "city_of_birth"=> nil, "age"=> nil }
    h.each do |key, value|
        puts key 
        h[key] = yield if block_given?
    end
    h
end

p get_user_info() {gets.chomp}