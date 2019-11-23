class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :member

  validates :detail, presence :true, length: {maximum: 120}, allow_nil: false
end
