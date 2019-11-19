class UsersController < ApplicationController
  def signup
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
    end
    render json: session
  end

  def login
    @user = User.find_by(email: user_params.email)
    if @user && @user.authenticate(user_params.password)
      session[:user_id] = @user.id
    end
    render json: session
  end

  def logout
    session.delete(:user_id)
    render json: session
  end

  private
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end
end
