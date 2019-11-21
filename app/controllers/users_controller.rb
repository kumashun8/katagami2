class UsersController < ApplicationController
  protect_from_forgery
  
  def signup
    user = User.create(
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation]
    )

    errors = Set.new(user.errors.full_messages)

    render json: { 
      auth: user.id,
      errors: errors.to_a
    }
  end

  def login
    user = User.find_by(email: params[:email])
    errors = {}
    auth = nil

    if user.present?
      if !!user.authenticate(params[:password])
        auth = user.id
      else
        errors[:password] = "パスワードが間違っています."
      end
    else
      errors[:email] = "登録されていないメールアドレスです."
    end

    render json: { 
      auth: auth,
      errors: errors
    }
  end

  private
    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end
end
