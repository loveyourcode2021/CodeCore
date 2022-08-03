class Post < ApplicationRecord
    has_many :comments, dependent: :destroy
    belongs_to :user
    validates :title, presence: { message: "must be provided" }, uniqueness: {scope: :body}
    validates :body, length: {minimum: 50, maximum:200} 

    
end