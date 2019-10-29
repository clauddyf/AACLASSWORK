json.array! @guests.each do |guest|
  # json.name guest.name 
  # json.age guest.age 
  # json.favorite_color guest.favorite_color 
  json.partial! 'guest', guest: guest
end


# json.array! @guests, :name, :age, :favorite_color

# @guests.each do |guest|
#   json.partial! 'guest', guest: @guest 
# end

# json.guests do 
#   @guests.each do |guest|
#     json.partial! 'guest', guest: guest 
#   end
# end