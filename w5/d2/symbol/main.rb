=begin
    user_input = gets.chomp
    result = Array.new()
    toArry = user_input.split("")

    for i in 0..toArry.length-2 do
        result.push([toArry[i], toArry[i+1]])
    end

    p result
=end


=begin
    Given an array of words, generate an array of numbers that contains the lengths of each word in the first array in the same order


    result = Array.new()
    user_input = gets.chomp..split("")
    for i in user_input do
        result.push(i.length) 
    end 
    p result
=end


=begin
Write some code that keeps asking the user for book names until the user enters "exit".
After typing "exit" the program should display all the entered book names sorted and have the book names capitalized.
=end

def q2()
    result = []
    while name = gets.chomp
        if name == 'exit'
            break
        else
            result.push(name.capitalize)
        end
    end
    p result.sort
end


=begin
Square Array of Arrays
=end
def q3()
    array = [[2,3,4], [5,6,7], [6,7,8]]
    main_array = []
    for i in array
        if i.kind_of?(Array)
            sub_array = [] 
            for j in i
                sub_array.push (j * j)
            end
        end
        main_array.push(sub_array)
    end
    p main_array
end
=begin
    Given an array of words, generate an array of numbers that contains the lengths of each word in the first array in the same order.
=end
def q4()
  sample_wards = ["Aaron", "Wendy", "Alect", "Kayle"]
  result = []
  sample_wards.sort.each do |ele|
     result << ele.length
  end
  p result
end

=begin
Ruby String class comes with a `reverse` method that reverses the order of characters in a string:
=end
def q5()
    beautiful = "you are"
    max = beautiful.length
    loolback = []
    max = max -1
    
    beautiful.split("").each do |x|
        loolback[max] = x
        max = max - 1
    end
    p loolback.join("")
end

=begin
Ask the user for personal information: first name, last name, city of birth and age. 
Then store that information in a hash. 
After that loop through the hash and display the results, for example:
=end
def q6()
    info = {}
    puts "enter key"
    name = gets.chomp
    while(name != 'exit')
        puts "enter value"
        value = gets.chomp
        info["#{name}"] = value
        puts "enter key"
        name = gets.chomp 
    end
    p info
end

def q7()
    info = {}
    puts "enter key"
    name = gets.chomp
    while(name != 'exit')
        puts "enter value"
        value = gets.chomp
        info["#{name}"] = value
        puts "enter key"
        name = gets.chomp 
    end
    info.each do |key, value|
        p "key:" + key + "value:" + value
    end
end


def q8()
    numbs = []
    hash = {}
    for i in 0..1_000 do
        numbs << i
        hash[i.to_s] = i
    end
    key = rand(1..1000)
    val = rand(1..1000)
    numbs[key] = val
    hash[:key.to_s] = val
    hashed_numbs = {}
    
    duplicated_array = 0
    numbs.each do |key1|
        hash[key1] = hash[key1].nil? || hash[key1] == 0 ? 1 : hash[key1]+1
    end
    resultOfHashed = ""
    hashed_numbs.each do |key, value|
        if(value > 1)
            resultOfHashed = key.to_s
            break   
        end
    end    
    duplicated_hash = 0
    hash.each do |key, val|
        hash.each do |key1, val1|
            if(val == val1)
                duplicated_hash = val
                break
            end
        end
    end
 
    p "without hash "+ duplicated_hash.to_s
    p "using hash" + resultOfHashed
end

q8()
