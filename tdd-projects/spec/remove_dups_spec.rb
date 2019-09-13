require "rspec"
require_relative "./../lib/remove_dups"


RSpec.describe Remove_dups do
  subject(:array) {Remove_dups.new}
  describe "#remove_dups" do 
    it "returns a new array with unique elements" do
      expect(array.remove_dups([21,21,21,21,21,21,21,21])).to eq([21])
    end  
    it "returns new array when only given 1 element" do
      expect(array.remove_dups([21])).to eq([21])
    end
    it "returns new array when given strings, Integers, etc" do
      expect(array.remove_dups([21, "alfredo", "alfredo", 4, 5, 5, 9])).to eq([21, "alfredo", 4, 5, 9])
    end
    it "returns new array when given strings, Integers, etc" do
      expect(array.remove_dups([21, "alfredo", "alfredo", 4, 5, 5, 9])).to_not eq([21, "alfredo", 4, 5, 5, 9])
    end
  end
end
