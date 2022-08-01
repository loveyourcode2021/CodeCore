=begin
[Lab] Map over Hashes
Implement a map_over_hash method that can be use to map over a hash returning an array. 
The block passed to the method must be passed the key and value of the mapped over pairs. 
You are not allowed to use Ruby Hash's each & map or any other similar method.

Example usage:

map_over_hash({ name: "Cersei", profession: "Queen", mood: "bitter" }) do |key, value|
  "Her #{key.to_s} is #{value}"
end
# => ["Her name is Cersei", "Her profession is Queen", "Her mood is bitter"]

map_over_hash({ 2 => 5, 10 => 2, 5 => 6 }) { |key, value| key.to_s * value }
# => [ "22222", "1010", "555555" ]
Pro Tip: You can use for .. in over hashes as you would over arrays.

for key, value in {a: 1, b: 2, c: 3, d: 4}
  puts "Key is #{key} and value is #{value}"
end
The above loop would log the following:

Key is a and value is 1
Key is b and value is 2
Key is c and value is 3
Key is d and value is 4
=end

def map_over_hash arr 
    
    for key, index in arr
        val = yield(key, index)
        p "key is #{key} and index is #{val}"
    end
end
map_over_hash({ 2 => 5, 10 => 2, 5 => 6 }) { |key, value| key.to_s * value }