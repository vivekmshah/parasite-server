Rails.application.routes.draw do

  scope 'api', defaults: {format: :json} do
    resources :notes, :only => [:index]
  end

end
