def map(arr)
    output = []
    for val in arr do
      output << yield(val) if block_given?
      p output
    end
    return output
  end
  
  p map([1,2,3,4]){|x| x * 5}
  
  p map(["Hi", "Hola", "Hello"]) do |x|
    x + ", Students"
  end