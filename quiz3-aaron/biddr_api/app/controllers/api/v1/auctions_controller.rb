class Api::V1::AuctionsController < Api::ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
    before_action :find_auction, only: [:show]
    before_action :create, only: [:create]

    def create
        p "----Create AuctionsController----",current_user
        p "----Create AuctionsController----",auction_params
        p "p0000", params
        auction = Auction.new auction_params
        auction.user = current_user
        p "p0000", params
        if auction.save
            render json: {id: auction.id}
        else
            render json: {errors: auction.errors}, status: 422
        end
    end

    def show
        render json: @auction
    end

    def index
        p "------INDEX-----"
        auctions = Auction.order(created_at: :desc)
        render json: auctions
    end

    private
    def find_auction
        @auction ||= Auction.find params[:id]
    end
    def auction_params
        params.permit(:title, :description, :reserve_met,:reserve, :ending)
    end
end
