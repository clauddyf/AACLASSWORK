Rails.application.routes.draw do
  resources :users 
  resource :session
  resources :subs, except: [:destroy] 
  resources :posts, except: [:index]

  
end
