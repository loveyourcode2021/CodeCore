class ReviewsController < ApplicationController

    before_action :authenticate_user!
    before_action :find_idea

    def show
        p "COMMENT--------Show"
        @review = Review.new params.require(:reivew).permit(:body)
        @review.idea = @idea
        redirect_to idea_path(@idea)
    end

    def create
        p "COMMENT--------Create"
        @review = Review.new params.require(:review).permit(:body)
        @review.idea = @idea
        @review.user = current_user
        if @review.save
            p "COMMENT--------Create-------Saved"
            redirect_to idea_path(@idea), notice: "Review Created!"
        else
            p "COMMENT--------Create-------NOTTTTTT-Saved"
            @review = @idea.reviews.order(created_at: :desc)
            render 'ideas/show', status: 303
        end
    end
    def destory
        p "COMMENT--------Create"
        @review = Review.new params.require(:review).permit(:body)

        if can?(:crud, @review)
            @review.destroy
            redirect_to idea_path(@idea), notice: 'Review Deleted' 
        else
            redirect_to root_path, alert: "Not Authorized"
        end
    end

    private
    def find_idea
        @idea = Idea.find params[:idea_id]
    end
end
