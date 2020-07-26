class HousesController < ApplicationController
   def index
      houses = House.all

      render json: houses
   end
   
   
   def create
      house = House.new(house_params)
      

      if house.save
         render json: house, include: [:user]
      else 
         render json: house.errors
      end
   end



   def house_params
      params.require(:house).permit(:name, :lat, :lng, :viewing_time, :viewing_date, :house_information, :user_id)
  end
end
