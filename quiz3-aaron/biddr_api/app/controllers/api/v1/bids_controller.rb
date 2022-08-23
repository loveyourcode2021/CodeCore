class Api::V1::BidsController < Api::ApplicationController
    before_action :authenticate_user!
 
    def create
        @auction = Auction.find params[:auction_id]
        @bid = Bid.new bid_params
        @bid.auction = @auction
        @bid.user = current_user
        if @bid.save
            render( json: {id: @bid.auction_id})
        else
            render(
              json: {errors: @bid.errors},
              status: 422
          )
        end
      
    end
    def bid_params
        p  "this is your mom =============", params
        params.require(:bid).permit(:bid)
    end
end
