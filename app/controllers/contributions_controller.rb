class ContributionsController < ApplicationController
    before_action :logged_in_user, only: [:create, :destroy]

  def create
    @contributions = current_user.microposts.build(contributions_params)
    if @contributions.save
      flash[:success] = "Micropost created!"
      redirect_to root_url
    else
      render 'static_pages/home'
    end
  end

  def destroy
  end

  private

    def contributions_params
      params.require(:contributions).permit(:content)
    end
end
