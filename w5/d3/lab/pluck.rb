=begin
[Lab] Implement Pluck Method
Implement a `pluck` method, which takes an array of hashes and a key name, and returns an array containing the values for each named key in the hash.

For example:


pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :a) ## returns [nil, 4, 1, nil]
pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :b) ## returns [2,4,nil,nil]
=end


def pluck(json, key)
    result = []
    json.each do |k, v|
        k.each do |k1, v2|
             if (k1 == key)
                result << v2 
            else
                result << nil
            end
        end
    end
    p result
end

def pluck1 hash_arr, key
    result = []
    for hash in hash_arr
        result << hash[key]
    end
    p result
end
pluck1([{a:1}, {a:2}], :a) ## returns [1,2]
pluck1([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :a) ## returns [nil, 4, 1, nil]
pluck1([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :b) ## returns [2,4,nil,nil]