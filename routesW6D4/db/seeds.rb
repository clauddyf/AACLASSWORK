# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord ofj the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'Braeden')
User.create(username: 'Claudius')
User.create(username: 'JimBob')
User.create(username: 'RandyMoss')
User.create(username: 'Brian Urlacher')

Artwork.create(title: 'Braedens First', image_url: 'first.com', artist_id: 1)
Artwork.create(title: 'Braedens Masterpiece', image_url: 'another.com', artist_id: 1)
Artwork.create(title: 'Masterpiece', image_url: 'second.com', artist_id: 2)
Artwork.create(title: 'Painting', image_url: 'solomon.com', artist_id: 2)
Artwork.create(title: 'Chicago', image_url: 'urlacher.com', artist_id: 5)
Artwork.create(title: 'ONe-handed', image_url: 'fourth.com', artist_id: 4)
Artwork.create(title: 'Cmon Man', image_url: 'url.com', artist_id: 4)
Artwork.create(title: 'MLB', image_url: 'fifth.com', artist_id: 5)
Artwork.create(title: 'BearDown', image_url: 'something.com', artist_id: 5)
Artwork.create(title: 'Montgomery', image_url: 'third.com', artist_id: 3)

ArtworkShare.create(artwork_id: 3, viewer_id: 1)
ArtworkShare.create(artwork_id: 2, viewer_id: 4)
ArtworkShare.create(artwork_id: 5, viewer_id: 2)
ArtworkShare.create(artwork_id: 1, viewer_id: 1)
ArtworkShare.create(artwork_id: 1, viewer_id: 3)
ArtworkShare.create(artwork_id: 4, viewer_id: 2)
ArtworkShare.create(artwork_id: 4, viewer_id: 1)
ArtworkShare.create(artwork_id: 5, viewer_id: 3)
ArtworkShare.create(artwork_id: 5, viewer_id: 1)
ArtworkShare.create(artwork_id: 2, viewer_id: 5)

ArtworkShare.create(artwork_id: 9, viewer_id: 2)
ArtworkShare.create(artwork_id: 2, viewer_id: 1)
ArtworkShare.create(artwork_id: 7, viewer_id: 2)
ArtworkShare.create(artwork_id: 8, viewer_id: 1)
ArtworkShare.create(artwork_id: 6, viewer_id: 4)
ArtworkShare.create(artwork_id: 10, viewer_id: 2)
ArtworkShare.create(artwork_id: 7, viewer_id: 5)