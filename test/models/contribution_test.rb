require 'test_helper'

class ContributionTest < ActiveSupport::TestCase

 def setup
   @user = users(:one) #fa referència a la fixture "one" definida a test/fixtures/users.yml
   # This code is not idiomatically correct.
   #@contribution = Contribution.new( titulo: "Lorem ipsum", user_id: @user.id)
   @contribution = @user.contributions.build(titulo: "Lorem ipsum")
 end

 test "should be valid" do
   assert @contribution.valid?
 end

 test "user id should be present" do
   @contribution.user_id = nil
   assert_not @contribution.valid?
 end

 test "content should be present" do
   @contribution.titulo = " "
   assert_not @contribution.valid?
 end

 test "content should be at most 140 characters" do
   @contribution.titulo = "a" * 141
   assert_not @contribution.valid?
 end
 
 test "order should be most recent first" do
    assert_equal contributions(:most_recent), Contribution.first
  end
end
