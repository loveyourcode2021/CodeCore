def lab1()
    for i in (97..(97+27))
        num = (i.to_i%97)+1
        num.times{print "#{i.chr}"}
    end
end

=begin
How many sides does a hexagon have?
1- five
2- six
3- seven

Enter the correct number:
=end
def lab2()
    require 'json'
    questions = [ "How many sides does a hexagon have?",  "How many sides does a triangle have?",
    "How many sides does a square have?"
    ]
    answers = [ 2, 1, 3]
    for i in 0..questions.size 
        puts "#{questions[i]}"
        puts "1- three"
        puts "2- six"
        puts "3- four"
        count = 3
        puts "put your damn asnwer"
        answer = gets.chomp.to_i
        while answer > 0 && count != 0
            if answer.to_i.eql?(answers[i])  
                percent = (count/3).to_f.round(2);
                puts "your score is #{(percent*100)}";
                break;
            else 
                count = count - 1;
                percent = (count/3).to_f.round(2);
                puts "Your score is #{percent*100}";
            end
            puts "put your damn asnwer"
            answer = gets.chomp.to_i
        end
    end
end

=begin
Ask the user for for three inputs and then print out all the possible permutations for the user inputs. For instance if the users inputs `a`, `b` and `c` you should print out:

a a a
a a b
a a c
a b a
a b b
....etc

[STRETCH] Complete the exercise without making use of arrays permutation method.

[STRETCH] Complete the exercise without making use of arrays.
=end 

def lab3()
    arg = ARGV
    if( arg.size > 0)
     per = ARGV.permutation.to_a
     puts "#{per}"
    end
end

def lab3_strech(array, n = array.size - 1)
    if  n == 0
        p array
        return array
    #else dig dipper
    else
        for i in 0..n do
            perms(array, n-1)
            if (n-1) % 2 == 1
                array[1], array[n] = array[n], array[1]
            else
                array[i], array[n] = array[n], array[i]
            end
        end
    end
end

def lab4_primeNum(n)
    for i in 2..n-1
        if (n % i == 0) 
            return false;
        end
    end
    return true
end;
=begin
num = gets.chomp.to_i
puts "#{lab4_primeNum(num)}"
=end
num = gets.chomp.to_i
def exe_ascii_triangle(num)
    for row in 0..num
        result = ""
        (rows-row).times{print " "}
        (row).times{print "*"}
        (row-1).times { print ""}
    end   
end
print "Enter Number for Rows", ": "

rows = gets.chomp.to_i


for row in 0..rows
	(rows-row).times {print " "}
	row.times {print "*"}
	(row-1).times {print "*" }
	puts
end

1.times {print "*"}