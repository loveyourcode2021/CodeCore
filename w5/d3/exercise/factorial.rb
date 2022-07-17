def factorial val
    result = 1
    for i in 1..5
        
        result = result * i
        p result
    end
    result
end

p factorial 5