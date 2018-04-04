Rails.application.routes.draw do
  root 'home#index'
  get 'home/index'
  post 'authenticate', to: "authentication#authenticate"

end
