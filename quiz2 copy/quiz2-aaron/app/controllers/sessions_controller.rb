class SessionsController < ApplicationController
    def new
    end

    def create
        p "--------SESSION CREATE"
        @user = User.find_by_email params[:email]
        if @user&.authenticate(params[:password])
            p "--------SESSION CREATED WORKED"
            session[:user_id]=@user.id
            redirect_to root_path, notice: 'Logged in!'
       else
            p "--------SESSION CREATED NOT WORKED"
            flash[:danger] = "Wrong Credentails"
            redirect_to new_session_path
       end
    end

    def destroy
        p "--------SESSION DESTORY"
        session[:user_id] = nil
        flash[:alert] = "Logged Out"
        redirect_to root_path
    end

end
