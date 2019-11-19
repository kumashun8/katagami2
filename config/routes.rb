Rails.application.routes.draw do
  resources :members
  post '/signup', to: 'users#create'
  post '/login' , to: 'users#login'
  post '/logout', to: 'users#logout'
end
