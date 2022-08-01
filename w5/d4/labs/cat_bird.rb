require './animals.rb'

=begin
[Lab] Cat & Bird
Model the following in Ruby Classes & Objects: The cat catches the bird and eats it

Stretch 1: Use inheritance

Stretch 2: Give the cat and the bird names.

Stretch 3: Make the chances of the cat catching the bird 50%.

Stretch 4: Simulate having 100 cats trying to catch and eat 100 birds.

Stretch 5: Create a module called HelperMethods in a separate file that has a method called `random_number`. 
Include the module in your classes and use the `random_number` method if it makes sense.
=end

module HelperMethods
    def random_number_generator(bird)
        random_number = Math.random() > 0.5 ? 1: 2;
        if(random_number) 
            p "bird is hunted"
        
    end
end

class Bird < Animal

end

class Cat < Animal
    attr_accessor :random_number
    include HelperMethods(bird)
end

bird = Bird.new("hippy", "brown")
bird.run()