class Dog 
    attr_accessor : type, :color
    
    def initialize(type, color)
        @type = type
        @color = color
        @Bones = []
    end
    def give(bone)
        unless bone.is_a? Bones
            raise ArgumentError.new("Must be a bone")
        end
        if @bones.length >= 3
            puts "I have too many bones"
        else
           @bones.push(bones)
        end
        self
    end

    def eat_bone
        if @bones.empty?
            "I have no bones left"
        else
            bone_eaten = @bones.po{ 
            "yummy! I ate #{bone_eaten.size} bone"
        end
    end
end
class Bone
    attr_accessor :size

    def initialize
        random_number = rand(0..2)
        bone_size = %w(large medium small)
        @size = bones_size[random_number]
    end
end