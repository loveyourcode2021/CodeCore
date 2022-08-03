class PostsController < ApplicationController
    before_action :find_post, only: [:edit, :update, :show, :destroy]
 

  
    def new
        p "------------NEW"
        @post = Post.new
    end

    def create
        p "------------CREATE"
        @post = Post.new(params.require(:post).permit(:title, :body))
        
        if  @post.save
            flash[:notice] = "Post created Successfully!"
            redirect_to post_path(@post)
        else
            render :new
        end
    end


    def index
        p "------------INDEX"
        @posts = Post.order(created_at: :DESC)
    end

    def show
        p "------------SHOW"
        @comments = @post.comments.order(created_at: :desc)
        @comment = Comment.new
    end


    def edit
    end

    def update
        if @post.update(post_params)
            redirect_to post_path(@post)
        else
            render :edit
        end
    end

   
  def destroy
    p "------------DELETE"
    @post.destroy
    redirect_to posts_path
  end

    private

    def find_post
        @post = Post.find params[:id]
    end

    def post_params
         params.require(:post).permit(:body)
    end
end
