Rails.application.routes.draw do

  # scope 'api', defaults: {format: :json} do
  #   resources :notes
  #   # resources :users
  # end
 
  get 'signup', to: 'users#new', as: 'signup'
  post 'signup', to: 'users#create'

  get 'login', to: 'sessions#new', as: 'login'
  post 'login', to: 'sessions#create'

  delete 'logout', to: 'sessions#destroy', as: 'logout'
  root 'notes#index'
  resources :notes
  resources :users

  resources :comments

  # match '*any' => 'application#options', :via => [:options]

end
