=begin
[Exercise] Array from Hash
bc_cities_population = {vancouver: 2135201, victoria:  316327, abbotsford: 149855, kelowna: 141767, nanaimo:  88799, white_rock: 82368, kamloops: 73472, chilliwack: 66382 }
Write a method that takes the hash above and returns an array of the values divided by a 1000 in one line of code.
=end


c_cities_population = {vancouver: 2135201, victoria:  316327, abbotsford: 149855, kelowna: 141767, nanaimo:  88799, white_rock: 82368, kamloops: 73472, chilliwack: 66382 }
def pop x
    result = []; x.each do |key, val| result << val/1000;  end p result;
end
pop c_cities_population