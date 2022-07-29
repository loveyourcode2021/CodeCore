class User < ApplicationRecord
    before_validation :downcase_email
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
    has_secure_password
    validates :email, presence: { message: "must be provided" }, uniqueness: { scope: :email, message: "has already been registered"}, format: VALID_EMAIL_REGEX

    has_many :post, dependent: :destroy
    has_many :comment, dependent: :destroy
    cattr_reader :current_password
    private
    def downcase_email
        self.email = email.downcase if email.present?
    end





   def update_with_password(user_params)
    current_password = user_params.delete(:current_password)

    if self.authenticate(current_password)
      self.update(user_params)
      true
    else
      self.errors.add(:current_password, current_password.blank? ? :blank : :invalid)
      false
    end
  end
end
