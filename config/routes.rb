Rails.application.routes.draw do
  root 'home#index'
  get 'home/index'
  post 'authenticate', to: "authentication#authenticate"
  resources :posts, only: [:index]
  resources :users, only: [:create]
end
