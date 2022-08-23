class Api::ApplicationController < ApplicationController
    skip_before_action :verify_authenticity_token


private

    def authenticate_user!
        p "authenticate User", current_user
        if current_user.present? == false
            render(json: { status: 401})
        end
    end
end
