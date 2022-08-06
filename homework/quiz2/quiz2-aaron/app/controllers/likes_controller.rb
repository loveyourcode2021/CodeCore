class LikesController < ApplicationController
    def create
        idea = Idea.find params[:idea_id] 
        like = Like.new(idea: idea, user: current_user)
          
        if !can?(:like, idea)
          flash[:danger] = "You liked it"
        elsif like.save
          flash[:success] = "liked!"
        else
          flash[:danger] = like.errors.full_messages.join(', ')
        end
        p "-------------awwwwwww"
        p "", params
        if params[:format] == "index" && params[:action] == "create"
          redirect_to root_path(like.idea)
        else
          redirect_to idea_path(like.idea)
        end
      end

      def destroy
        like = current_user.likes.find params[:id] 
    
        if !can?(:destroy, like)
          flash[:warning] = "can not destroy"
        elsif like.destroy
          flash[:success] = "Idea Unliked"
        else
          flash[:warning] = "Could not Unlike Idea"
        end
  
        if params[:format] == "show" && params[:action] == "destory"
          redirect_to idea_path(like.idea)
        else
            redirect_to root_path(like.idea) 
         end
      end
end
