class StaticPagesController < ApplicationController
  def home
    @contributions = Contribution.all.order(created_at: :desc)
  end
end
