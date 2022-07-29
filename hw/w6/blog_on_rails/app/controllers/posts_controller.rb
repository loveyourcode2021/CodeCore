class PostsController < ApplicationController
    before_action :find_post, only: [:edit, :update, :show, :destroy]
    before_action :authenticate_user!, except: [:index, :show]
    before_action :authorize_user!, only:[:edit, :update, :destroy]

    def new
        p "------------NEW"
        @post = Post.new
    end

    def create
        p "------------CREATE"
        @post = Post.new(params.require(:post).permit(:title, :body))
        @post.user = current_user
        if  @post.save
            flash[:notice] = "Post created Successfully!"
            @post.user = current_user
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
    def authorize_user!
        redirect_to root_path, alert: "Not authorized" unless can?(:crud, @post)
    end
    
    def find_post
        @post = Post.find params[:id]
    end

    def post_params
         params.require(:post).permit(:title,:body)
    end
end
