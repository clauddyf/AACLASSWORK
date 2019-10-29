# json.extract! @guest, :name, :age, :favorite_color

json.partial! 'guest', guest: @guest 

# json.array! @guests.each do |guest|
#   json.gift guest.gift
# end