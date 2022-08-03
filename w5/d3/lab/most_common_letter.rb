def most_common_letter(info)
    data = info.chomp.split("")
    hash = {}
        p data
        data.each do |element, index|
            if element.downcase.gsub(/[^a-zA-Z0-9]/)
                hash[element] = (hash[element] == nil || hash[element] == 0) ? 1: hash[element]+=1 
            end  
        end
        first  = ""
        val = 0

        hash.each do |key, value|
            first = key
            
            if val < value
                val = value
                break
            end
        end
        p first
                
end

most_common_letter("aaaabbc") # => "a"
most_common_letter("T a d c g d g d d n") # => "d"
most_common_letter("1111 monkeys on the wall") # => "1"
=begin
{|info, hash| 
numb = hash[info]
p nnumbum, info
result = (numb == nil && numb == 0) ? 1: numb+1   
p result
return result
}
=end