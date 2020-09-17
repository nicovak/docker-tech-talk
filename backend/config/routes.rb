Rails.application.routes.draw do
  root 'base#site'
  get 'api', to: 'base#api'
end
