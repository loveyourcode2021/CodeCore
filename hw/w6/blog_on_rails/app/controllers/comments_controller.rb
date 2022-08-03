class CommentsController < ApplicationController

    before_action :find_post, except: [:index]
    before_action :authenticate_user!, except: [:index, :show]
    
    def create
        p "COMMENT--------C reate"
        p params["comment"]
        @comment = Comment.new params.require(:comment).permit(:body)
        @comment.post = @post
        @comment.user = current_user
        p "i am emtpy", @post.title, @post.body
        if @comment.save
            p "COMMENT--------Create-------Saved"
            redirect_to post_path(@post), notice: "Comment Created!"
        else
            p "COMMENT--------Create-------NOTTTTTT-Saved"
        
            @comments = @post.comments.order(created_at: :desc)
            render 'posts/show', status: 303
        end
    end

    def destroy
        p "COMMENT---------DESTROY"
        @comment = Comment.find params[:id]
        @comment.destroy
        redirect_to post_path(@post), notice: "Comment Deleted"
    end
    
    private

    def find_post
        @post = Post.find params[:post_id]
    end

    def authorize_user!
        redirect_to root_path, alert: "Not authorized" unless can?(:crud, @comments)
    end
    
end
