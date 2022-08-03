class ApplicationController < ActionController::Base
    helper_method :current_user
    helper_method :user_sign_in?
    helper_method :authenticate_user!
    private
    def current_user
        @current_user ||= User.find_by_id(session[:user_id])
    end

    def user_sign_in?
        current_user.present?
    end
    
    def authenticate_user!
        redirect_to new_session_path,  notice: "Please sign up" unless user_sign_in?
    end
end
