class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    a = self.dup
    return 0 if a.empty?
    a = self.join("").to_i
  
  end
end

class String
  def hash
    a = self.dup
    
  
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    0
  end
end
