class Rectangle
    attr_accessor :width, :height
    
    def initialize(width = 2, height =2)
        @width, @height = width, height
    end

    def area 
        width * height
    end

    def is_square?
        width == height
    end
end

r = Rectangle.new(2,3)
p r.area
p r.is_square?


