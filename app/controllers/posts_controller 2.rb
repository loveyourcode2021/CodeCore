class PostsController < ApplicationController
    before_action :find_post, only: [:edit, :update, :show, :destroy]
 

  

    def new
        p "------------NEW"
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
        @posts = Post.order(created_at: :DESC)
        p "------------INDEX"
    end

    def show
        @users = Post.order(created_at: :desc)
        p "------------SHOW"
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

   

    private

    def find_post
        @post = Post.find params[:id]
    end

    def post_params
         params.require(:post).permit(:body)
    end
end
