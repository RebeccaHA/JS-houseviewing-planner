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

   def update
      house = House.find_by_id(params[:id])
      
      if params[:checked] === "true"
         house.viewed = true
         
      else
         house.viewed = false

      end

      house.save


      render json: house
   end



   def house_params
      params.require(:house).permit(:name, :lat, :lng, :viewing_time, :viewing_date, :house_information, :user_id, :viewed,:checked)
  end
end
