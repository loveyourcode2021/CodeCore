class Comment < ApplicationRecord
    belongs_to :post
    belongs_to :user
    validates :body, length: {minimum: 50, maximum:200} 
end
