Rails.application.routes.draw do
  get 'friendship/create'

  root 'home#index'
  get 'home/index'
  post 'authenticate', to: "authentication#authenticate"
  resources :friendships, only: [:create]
  resources :posts, only: [:create, :index]
  resources :users, only: [:create, :index]
end
