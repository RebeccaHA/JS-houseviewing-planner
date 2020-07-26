class HouseSerializer < ActiveModel::Serializer
  attributes :id, :name, :lat, :lng, :viewing_time, :viewing_date, :house_information, :user_id
  belongs_to :user
end
