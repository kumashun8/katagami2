class UsersController < ApplicationController
  protect_from_forgery
  
  def signup
    user = User.create(
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation]
    )
    render json: { 
      auth: user.id,
      errors: user.errors.full_messages
    }
  end

  def login
    user = User.find_by(email: params[:email])
    error = ""
    auth = nil

    if user.present?
      if !!user.authenticate(params[:password])
        auth = user.id
      else
        error = "パスワードが間違っています."
      end
    else
      error = "登録されていないメールアドレスです."
    end

    render json: { 
      auth: (user && !!user.authenticate(params[:password])) ? user.id : nil,
      error: error
    }
  end

  private
    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end
end
