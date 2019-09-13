class Card
  CARDVALUES = %w[a 2 3 4 5 6 7 8 9 10 j q k]
  KINDVALUES = %[spades clovers hearts diamond]

  def initialize(val,kind)
    @value = val
    @kind = kind
  end

end