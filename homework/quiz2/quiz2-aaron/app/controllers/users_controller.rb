class UsersController < ApplicationController
    def new
        p "------------USER NEW"
        @user = User.new
    end
    def create
        p "------------USER CREATE"
        @user = User.new params.require(:user)
        .permit(:first_name, :last_name, :email, :password, :password_confirmation)

        if @user.save
            p "------------USER CREATE SAVED"
            session[:user_id] = @user.id
            redirect_to root_path
        else
            redirect_to :new
        end
    end
end
