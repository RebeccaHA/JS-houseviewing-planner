# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name: "Ben", home_longitude: 51.5074, home_latitude: -0.1278)
User.create(name: "Brain",home_longitude: 51.4880,home_latitude: -0.1119)
User.create(name: "Borris",home_longitude: 51.3981,home_latitude: -0.0716)
User.create(name: "Bill",home_longitude: 51.4966,home_latitude: -0.0147)
User.create(name: "Brice",home_longitude: 51.4518, home_latitude: -0.1252)
User.create(name: "Bob",home_longitude: 51.5002,home_latitude: 0.1034)

House.create(name: "house 0", lat:51.4613, lng: -0.1156, viewing_time: "13:00", viewing_date: "02/07/2020", house_information:"this is a 4 four bed with some sound people", user_id:1)
House.create(name: "house 1", lat:51.5390,lng: -0.1426, viewing_time: "13:00", viewing_date: "02/07/2020", house_information:"this is a 4 four bed with some sound people", user_id:2)
House.create(name: "house 2", lat:51.5413, lng:-0.1533, viewing_time: "13:00", viewing_date: "02/07/2020", house_information:"this is a 4 four bed with some sound people", user_id:3)
House.create(name: "house 3", lat:51.4183, lng:-0.2206, viewing_time: "13:00", viewing_date: "02/07/2020", house_information:"this is a 4 four bed with some sound people", user_id:4)
House.create(name: "house 4", lat:51.4506, lng:-0.1069, viewing_time: "13:00", viewing_date: "02/07/2020", house_information:"this is a 4 four bed with some sound people", user_id:4)