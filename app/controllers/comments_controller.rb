class CommentsController < ApplicationController
  protect_from_forgery

  def create
    @comment = Comment.create(
      detail: params[:detail],
      user:   User.find(params[:user]),
      member: Member.find(params[:member])
    )
    render json: @comment
  end

  def update
    @comment = Comment.find(params[:id])
    @comment.detail = params[:detail]
    @comment.save
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

  def index_by_user
    @comments = User.find(params[:id]).comments
    render json: @comments
  end
end