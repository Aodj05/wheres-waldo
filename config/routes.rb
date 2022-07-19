Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get 'pages/game'
  root 'pages#game'

  namespace :api do 
    namespace :v1 do 
      resources :photos, only: [:index, :show]
      resources :photos  do
        resources :subjects, only: [:index]
        resources :scores, only: [:index, :create]
      end
    end
  end
end
