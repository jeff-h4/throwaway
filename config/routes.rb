Rails.application.routes.draw do
  get 'friendship/create'

  root 'home#index'
  get 'home/index'
  post 'authenticate', to: 'authentication#authenticate'
  resources :friendships, only: [:create]
  resources :friends, only: [:index]
  resources :posts, only: [:create, :index, :update]
  resources :users, only: [:create, :index, :show]
end
