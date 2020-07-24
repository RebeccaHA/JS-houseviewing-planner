class UsersController < ApplicationController
    def index
        users = User.all
        render json: users, only: [:id, :name, :home_longitude, :home_latitude]
    end

    def show
        user = User.find_by(id: params[:id])
        houses = user.houses

        render json: user, include: [:houses]
    end

    def create
        user = User.new(user_params)

        if user.save
            render json: user, only: [:id, :name, :home_longitude, :home_latitude]
        else
            render json: user.errors
        end
    end

    def user_params
        params.require(:user).permit(:name, :home_longitude, :home_latitude)
    end
end
