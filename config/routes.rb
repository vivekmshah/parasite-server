Rails.application.routes.draw do

  scope 'api', defaults: {format: :json} do
    resources :notes
    resources :users
  end

  match '*any' => 'application#options', :via => [:options]

end
