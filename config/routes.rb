Rails.application.routes.draw do
  root "application#index"
  get "users/index", to: "users#index"
end
