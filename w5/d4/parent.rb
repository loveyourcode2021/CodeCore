class Cookie

    attr_accessor :sugar, :flour

    def initialize(sugar=1, flour=2)
      puts "in the initialized method"
      @sugar = sugar
      @flour = flour
      @@color = "Brown" #class variables can be accessed and changed by all subclasses as well
    end

  

  
    def bake_n_eat
      bake()
      eat()
    end
    
    def eat
      p "Nom Nom Nom!"
    end
  
    def self.info
      p "Cookies are essential to a balanced diet!"
    end
  
    def details
      p "sugar: #{@sugar} | flour: #{@flour}."
    end
    
    private
    
    def bake
      p "Baking the cookie"
    end
  
  end

  class Oreo < Cookie
    attr_accessor :filling_type
  
    def eat
      p "Yummy!!!"
      super
    end
  
  end
  
  oc = Oreo.new
  p oc.sugar
  oc.bake_n_eat # Child class has access to parent class methods
  oc.filling_type = "cream"
  p oc.filling_type
  
  c4 = Cookie.new
  p c4.bake_n_eat
  


p a = %w(aaraa ab albatross dog horse)
p a.min                                   #=> "albatross"
p a.min { |a, b| a.length <=> b.length }
