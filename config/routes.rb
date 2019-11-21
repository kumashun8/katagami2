Rails.application.routes.draw do
  resources :members
  post '/signup', to: 'users#signup'
  post '/login' , to: 'users#login'
end
