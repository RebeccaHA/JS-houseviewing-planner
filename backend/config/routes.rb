Rails.application.routes.draw do
  resources :houses
  resources :users
  get '/test', to: 'application#test'
end
