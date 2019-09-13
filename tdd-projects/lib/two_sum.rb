class Array
  
  def two_sum(arr)
    result = []
    i = 0
    while i < arr.length - 1
      j = i + 1
      while j  < arr.length
        if arr[i] + arr[j] == 0
          result << [i, j]
        end
        j += 1
      end
      i += 1
    end
    result
  end

end

class Array
  
  def two_sum
    result = []
    i = 0
    while i < self.length - 1
      j = i + 1
      while j  < self.length
        if self[i] + self[j] == 0
          result << [i, j]
        end
        j += 1
      end
      i += 1
    end
    result
  end

end