Rails.application.routes.draw do
  resources :members
  get '/signup', to: 'users#create'
  get '/login' , to: 'users#login'
  get '/logout', to: 'users#logout'
end
