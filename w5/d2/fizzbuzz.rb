result = []
for x in 1..100
    result.push(x)
end
for x in result
   p "fizz" if x % 3 ==0 
   p "buzz" if x % 5 == 0
   p "fizzbuzz" if x % 3 && x % 5
   p x.to_s if (x % 3) > 0 && (x % 5) > 0
end