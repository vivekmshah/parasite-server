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
  resources :notes, except: [:show, :create]
  resources :users

  resources :comments

  get 'notes/:id' => 'notes_fragment#show', as: :note_fragment
  post 'notes' => 'notes_fragment#create'

  # match '*any' => 'application#options', :via => [:options]

end
