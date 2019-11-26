class CommentsController < ApplicationController
  protect_from_forgery

  def create
    user = User.find(params[:user])
    @comment = Comment.create(
      detail:     params[:detail],
      user:       user,
      user_email: user.email,
      member:     Member.find(params[:member])
    )
    render json: @comment
  end

  def update
    Comment.find(params[:id]).update(detail: params[:detail])
    render json: @comment
  end

  def destroy
    Comment.find(params[:id]).delete
    render json: {comment_count: Comment.count }
  end

  def index_by_member
    @comments = Member.find(params[:id]).comments.order(created_at: "DESC")
    render json: @comments
  end
end