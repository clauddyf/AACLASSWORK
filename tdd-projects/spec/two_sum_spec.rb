require "rspec"
require_relative "./../lib/two_sum.rb"


RSpec.describe Array do
  subject(:array) {Array.new}
  describe "#two_sum" do 
    it "returns an empty array if the sum" do
      expect(array.remove_dups([21,21,21,21,21,21,21,21])).to eq([])
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