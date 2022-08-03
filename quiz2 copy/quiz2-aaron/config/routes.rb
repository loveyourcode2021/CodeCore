Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "ideas#index"
  resources "ideas" do
    resources :reviews, only:[:create, :destroy]
    resources :likes,  shallow: true,only:[:create, :destroy]
    get :liked, on: :collection
  end
  resource :session, only: [:new,:create, :destroy]
  resources :users, only: [:new, :create]
end