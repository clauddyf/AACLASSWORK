Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: %i(create index show update destroy)
  resources :artworks, only: %i(create show update destroy)
  resources :artwork_shares, only: %i(create destroy)
  resources :users do
    resources :artworks, only: :index
  end
end
