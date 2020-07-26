class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :home_longitude, :home_latitude
  has_many :houses
end
