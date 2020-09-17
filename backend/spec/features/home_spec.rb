require 'rails_helper'

describe "home page", type: :feature do
  it "show home page" do
    visit '/'
    # expect(page).to have_content 'Success'
    expect(page.status_code).to be(200)
  end
end