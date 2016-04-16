require 'test_helper'

class ContributionTest < ActiveSupport::TestCase
  
  def setup
    @user = User.new(user:Michael)
    # This code is not idiomatically correct.
    @contributions = Contributions.new( text: "Lorem ipsum", user_id: @user.id)
  end
  
  test "should be valid" do
    assert @contributions.valid?
  end
  
  test "user id should be present" do
    @contributions.user_id = nil
    assert_not @contributions.valid?
  end
  
  test "content should be present" do
    @contributions.text = "   "
    assert_not @contributions.valid?
  end

  test "content should be at most 140 characters" do
    @contributions.text = "a" * 141
    assert_not @contributions.valid?
  end
  
  # test "the truth" do
  #   assert true
  # end
end