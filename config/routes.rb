Rails.application.routes.draw do
  # Member
  resources :members
  # User
  post '/signup', to: 'users#signup'
  post '/login' , to: 'users#login'
  # Comment
  post '/comments', to: 'comments#create'
  post '/comments/update/:id', to: 'comments#update'
  delete '/comments/destroy/:id', to: 'comments#destroy'
  get '/comments/members/:id', to: 'comments#index_by_member'
  get '/comments/users/:id', to: 'comments#index_by_user'
end
