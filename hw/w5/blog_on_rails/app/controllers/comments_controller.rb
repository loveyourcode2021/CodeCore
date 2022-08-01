class CommentsController < ApplicationController

    before_action :find_post
    def index
        p "------------INDEX"
        @posts = Post.order(created_at: :DESC)
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


    def show
        p "------------SHOW"
        @comment = Comment.new params.require(:comment).permit(:body)
        @comment.post = @post
    end

    def edit
    end
    def update
        p "COMMENT---------update"
        if @post.update( params.require(:post).permit(:title, :body))
            redirect_to post_path(@post)
        else
            render :edit
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
    def post_params
        params.require(:post).permit(:title,:body)
   end
end
