class UsersController < ApplicationController
    before_action :find_user, only: [:create ,:edit_password, :edit, :update]

    def new
        p "------------USER NEW"
        @user = User.new
      
    end


 
    def create
        p "------------USER CREATE"
        @user = User.new params.require(:user).permit(:name, :email, :password, :password_confirmation)
        if @user.save
            p "------------USER CREATE SAVED"
            session[:user_id] = @user.id
            flash[:notice] = "Successfully logged in"
            redirect_to root_path
        else
            render :new
        end
    end

    def edit
        p "------------USER EDIT"
        render :edit
    end

    def edit_password
        p "------------USER EDIT PASSWORD"
        render :edit_password
    end

    def update
        p "------------USER UPDATE"

        if params["user"].has_key?("current_password")
            if @user&.authenticate params["user"][:current_password] 
                @user.password = params["user"]["new_password"] 
                @user.password_confirmation = params["user"][:new_password_confirmation]
                if @user.save
                    flash[:alert] = "Successfully Chnaged Password"
                    redirect_to root_path
                else
                    flash[:alert] = "Something wrong"
                    render :edit_password
                end
            else
                flash[:alert] = "Password is not matching"
                render :edit_password
            end
        else
            if @user.update(user_params)
                p "------------USER UPDATE SAVED"
                flash[:notice] = "Successfully Edited in"
                redirect_to root_path
            else
            render :edit
            end
        end
    end

    private
    def find_user
        if session[:user_id].present?
            p session[:user_id]
            @user = User.find( session[:user_id])
        else
            @user = User.new
        end
    end


    def user_params
         params.require(:user).permit(:name, :email)
    end



   def authenticate(password)
        @user.password == password
   end


end
