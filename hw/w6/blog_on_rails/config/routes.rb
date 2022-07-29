Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  resource :session, only: [:new, :create, :destroy]
  get 'users/:id/edit_password', to: 'users#edit_password', as: :edit_password_user
  resources :users, only: [:new, :create, :edit, :edit_password, :update]

  root "posts#index"
  resources "posts" do
    resources "comments"
  end

end
