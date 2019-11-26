Rails.application.routes.draw do
  # Member
  resources :members
  # User
  post '/signup', to: 'users#signup'
  post '/login' , to: 'users#login'
  get 'users/:id', to: 'users#show'
  # Comment
  post '/comments', to: 'comments#create'
  post '/comments/update/:id', to: 'comments#update'
  post '/comments/destroy/:id', to: 'comments#destroy'
  get '/comments/members/:id', to: 'comments#index_by_member'
end
