class MembersController < ApplicationController
  def index
    p ENV['CORS_ALLOWED_ORIGINS']
    @members = Member.all
    render :json => @members
  end
end
