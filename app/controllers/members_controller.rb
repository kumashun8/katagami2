class MembersController < ApplicationController
  protect_from_forgery

  def index
    @members = Member.order(created_at: "DESC").select(:id, :name)
    render :json => @members
  end

  def show
    @member = Member.find(params[:id])
    render :json => @member
  end

  def create
    @member = Member.create(
      name: params[:name],
      age:  params[:age]
    )
    render :json => @member
  end
end
