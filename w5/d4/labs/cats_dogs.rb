require './animal.rb'
class Dog<Animal
    def eat
        super
        p "Bones are yummy!"
    end
    def bark 
        p "woof"
    end
end

class Cat < Animal
    def eat
       p "Fish is yummy"
    end
end