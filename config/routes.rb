Rails.application.routes.draw do

  scope 'api', defaults: {format: :json} do
    resources :notes, :only => [:index, :create]
  end

  match '*any' => 'application#options', :via => [:options]

end
