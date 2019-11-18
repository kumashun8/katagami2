class MembersController < ApplicationController
  protect_from_forgery

  def index
    @members = Member.all
    render :json => @members
  end

  def create
    @member = Member.create(
      name: params[:name],
      age:  params[:age]
    )
    render :json => @member
  end
end
