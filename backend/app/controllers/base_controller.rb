class BaseController < ApplicationController
  def site
  end

  def api
    sleep 2

    data = { data: 'I love React & Rails (but Rails more)' }
    render json: data
  end
end
