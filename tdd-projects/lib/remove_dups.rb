class Remove_dups
  
  
  def remove_dups(arr)
  result = []
  arr.each do |ele|
    if result.include?(ele) == false
      result << ele
    end
  end
  result
  end

end