class RequestsController < ApplicationController
  def index
    render json: {requests: "They should be here"}
  end
end
