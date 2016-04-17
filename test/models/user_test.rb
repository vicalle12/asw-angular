require 'test_helper'

class UserTest < ActiveSupport::TestCase
  
  def setup
    @user = User.new(user: "Example User", email: "user@example.com",
                     password: "foobar")
  end
  
  test "associated contributions should be destroyed" do
    @user.save
    @user.contributions.create!(titulo: "Lorem ipsum")
    assert_difference 'Contribution.count', -1 do
      @user.destroy
    end
  end
end
