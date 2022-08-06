class User < ApplicationRecord
    before_validation :downcase_email

    has_secure_password


    has_many :ideas, dependent: :nullify
    has_many :reviews, dependent: :nullify

    has_many :likes
    has_many :liked_ideas, through: :likes, source: :idea
    
    validates :full_name, presence: { message: "must be provided" }
    validates :last_name, presence: { message: "must be provided" }
    validates :email, presence: { message: "must be provided" }, uniqueness: { scope: :email, message: "has already been registered"}
    
    def full_name
        "#{first_name} #{last_name}"
    end
    private
    def downcase_email
        self.email = email.downcase if email.present?
    end
end
