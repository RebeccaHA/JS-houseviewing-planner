# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name: "Ben", home_coordinates: "51.5074, -0.1278")
User.create(name: "Brain",home_coordinates: "51.5074, -0.1292")
User.create(name: "Borris",home_coordinates: "51.5074, -0.1240")
User.create(name: "Bill",home_coordinates: "51.5074, -0.1276")
User.create(name: "Brice",home_coordinates: "51.5074, -0.1290")
User.create(name: "Bob",home_coordinates: "51.5074, -0.1260")

House.create()