class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    sleep 0.3
    limit = params[:limit] || 10
    offset = params[:offset] || 0
    user_query = if params[:fuzzy_search].present?
                   User.where("name LIKE ? COLLATE NOCASE  OR job LIKE ? COLLATE NOCASE", "%#{params[:fuzzy_search]}%", "%#{params[:fuzzy_search]}%")
    else
                   User.all
    end
    users = user_query.limit(limit).offset(offset)
    render json: { users: users, total: user_query.count }
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    render json: { success: true }
  end
end
