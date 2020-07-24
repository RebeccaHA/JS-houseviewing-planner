class UsersController < ApplicationController
    def index
        users = User.all
        render json: users, only: [:id, :name, :home_coordinates]
    end

    def show
        user = User.find_by(id: params[:id])
        houses = user.houses

        render json: user, include: [:houses]
    end

    def create
        user = User.create(params)
    end
end
