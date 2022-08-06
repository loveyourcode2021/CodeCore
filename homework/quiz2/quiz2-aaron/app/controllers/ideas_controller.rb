class IdeasController < ApplicationController
    before_action :find_idea, only: [:show, :edit, :update, :destroy]
    before_action :authorize_user!, only:[:edit,:update,:destroy]
    before_action :authenticate_user!, except:[:index, :show]
    def new
        p "Idea New-------"
        @idea = Idea.new
    end

    def create
    
        p "Idea create-------"
        @idea = Idea.new params.require(:idea).permit(:title, :description)
        @idea.user = current_user
        if @idea.save
            p "Idea success-------"
            flash[:notice] = "Idea created successfully"
            redirect_to idea_path(@idea)
        else
            p "Idea failed-------"
            render :new
        end
    end

    def index
        p "Idea Index------"
        @ideas = Idea.order(created_at: :desc)
    end

    def show
        p "Idea show"
        @review = Review.new
        @reviews = @idea.reviews.order(created_at: :desc)
    end

    def edit
    end
  
    def update
        p "Idea UPDATE-------"
        if@idea.update(params.require(:idea).permit(:title, :description))
            p "Idea UPDATE-------Success"
            redirect_to idea_path(@idea)
        else
            p "Idea UPDATE-------failed"
            render :edit
        end
    end

    def destroy
        p "Destory ideas----"

       
        if   @idea&.destroy 
            p "Destory ideas good!----"
            flash[:notice] = "Idea deleted"
            redirect_to ideas_path
        else
            render :show
        end
    end

    private
    def find_idea
        @idea = Idea.find params[:id]
    end
    def authorize_user!
        redirect_to root_path, alert: 'You Need to Authorize' unless can?(:crud,Idea)
    end
end
