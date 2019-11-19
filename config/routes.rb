Rails.application.routes.draw do
  get 'users/create'
  resources :members
  resources :users
end
