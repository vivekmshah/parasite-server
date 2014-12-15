Rails.application.routes.draw do

  scope 'api', defaults: {format: :json} do
    resources :notes
    # resources :users
  end
 
  resources :notes
  resources :users

  get 'signup', to: 'users#new', as: 'signup'
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'

  match '*any' => 'application#options', :via => [:options]

end
