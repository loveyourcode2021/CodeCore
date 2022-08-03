class Idea < ApplicationRecord
    has_many :reviews, dependent: :destroy
    belongs_to :user 
    before_save :capitalize_title
    has_many :likes
    has_many :likers, through: :likes, source: :user

    validates :title, presence: {message: "Must be given"}, uniqueness: true
    validates :description, presence: true

    def capitalize_title
        self.title.capitalize!
    end
end
