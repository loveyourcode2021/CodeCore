class CommentsController < ApplicationController

    before_action :find_post
    def show
        @comment = Comment.new params.require(:comment).permit(:body)
        @comment.post = @post
        redirect_to post_path(@post)
    end
    def create
        p "COMMENT--------Create"
        @comment = Comment.new params.require(:comment).permit(:body)
        @comment.post = @post
        if @comment.save
            p "COMMENT--------Create-------NOTTTTTT-Saved"
            redirect_to post_path(@post), notice: "Comment Created!"
        else
            p "COMMENT--------Create-------Saved"
            @comments = @post.comments.order(created_at: :desc)
            render 'posts/show', status: 303
        end
    end

    def destroy
        p "COMMENT---------DESTROY"
        @comment =    Comment.find params[:id]
        @comment.destroy
        redirect_to post_path(@post), notice: "Comment Deleted"
    end
    
    private

    def find_post
        @post = Post.find params[:post_id]
    end
end
