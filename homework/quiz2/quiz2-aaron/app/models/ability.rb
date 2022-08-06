# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user (not logged in)
    if user.is_admin?
          can :manage, :all
    end
    alias_action(:create, :read, :update, :delete, to: :crud)
    can(:crud, Idea) do |idea|
      user == idea.user
    end

    can(:crud, Review) do |review|
      user == review.user
    end
    can(:like, Idea) do |idea|
      user.persisted? && idea.user != user
    end

    can(:destroy, Like) do |like|
      like.user == user
    end
  end
end
