class FizzBuzz
    def initialize(first_num=3,second_num=5)
        @first_num, @second_num = first_num, second_num
    end
    attr_accessor :first_num, :second_num
    def run()
        result=[]
        for i in 0..100 do
            str = ""
            if i % first_num == 0
                str << "Fizz"
            elsif  i % second_num == 0
                str << "Buzz"
           else
                str << i.to_s 
           end 
           result << str
        end
        result
    end

end

fizzBuzz = FizzBuzz.new(3,5)
p fizzBuzz.run
