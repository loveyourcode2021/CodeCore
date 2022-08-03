=begin
[Exercise] Frequency of Numbers
Given an array of number such as:

array = [1, 2, 3, 4, 4, 4, 2, 3, 3, 3]
Write a method, frequency_of_numbers, that will generate a hash of frequencies that looks like:

{1 => 1, 2 => 2, 3 => 4, 4 => 3}
Attempt to do the exercise in one line of code using methods like each_with_object.
=end
def requency_of_numbers data
    obj = {}
    for ele,index in data
        obj[ele] = ele
    end
    obj
end
def frequency_of_numbers(arr) arr.each_with_object(Hash.new(0)) {|item, hash| hash[item] += 1} end
arr = [1, 2, 3, 4, 4, 4, 2, 3, 3, 3]
p Hash[*arr]

p requency_of_numbers(arr)