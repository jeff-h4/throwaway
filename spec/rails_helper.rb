# This file is copied to spec/ when you run 'rails generate rspec:install'
require 'spec_helper'
ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
# Prevent database truncation if the environment is production
abort('The Rails environment is running in production mode!') if Rails.env.production?
require 'rspec/rails'
require 'support/factory_bot'
# Add additional requires below this line. Rails is not loaded until this point!
require 'aasm/rspec'
# Requires supporting ruby files with custom matchers and macros, etc, in
# spec/support/ and its subdirectories. Files matching `spec/**/*_spec.rb` are
# run as spec files by default. This means that files in spec/support that end
# in _spec.rb will both be required and run as specs, causing the specs to be
# run twice. It is recommended that you do not name files matching this glob to
# end with _spec.rb. You can configure this pattern with the --pattern
# option on the command line or in ~/.rspec, .rspec or `.rspec-local`.
#
# The following line is provided for convenience purposes. It has the downside
# of increasing the boot-up time by auto-requiring all files in the support
# directory. Alternatively, in the individual `*_spec.rb` files, manually
# require only the support files necessary.
#
# Dir[Rails.root.join('spec/support/**/*.rb')].each { |f| require f }

# Checks for pending migrations and applies them before tests are run.
# If you are not using ActiveRecord, you can remove this line.
ActiveRecord::Migration.maintain_test_schema!

RSpec.configure do |config|
  # Remove this line if you're not using ActiveRecord or ActiveRecord fixtures
  config.fixture_path = "#{::Rails.root}/spec/fixtures"

  # If you're not using ActiveRecord, or you'd prefer not to run each of your
  # examples within a transaction, remove the following line or assign false
  # instead of true.
  config.use_transactional_fixtures = true

  # RSpec Rails can automatically mix in different behaviours to your tests
  # based on their file location, for example enabling you to call `get` and
  # `post` in specs under `spec/controllers`.
  #
  # You can disable this behaviour by removing the line below, and instead
  # explicitly tag your specs with their type, e.g.:
  #
  #     RSpec.describe UsersController, :type => :controller do
  #       # ...
  #     end
  #
  # The different available types are documented in the features, such as in
  # https://relishapp.com/rspec/rspec-rails/docs
  config.infer_spec_type_from_file_location!

  # Filter lines from Rails gems in backtraces.
  config.filter_rails_from_backtrace!
  # arbitrary gems may also be filtered via:
  # config.filter_gems_from_backtrace("gem name")

  # Rspec metadata-based example enhancements
  config.before(:each, :logged_in) do
    user = double(user)
    allow_any_instance_of(UserAuthenticationService).to receive(:authenticate_request).and_return(true)
    allow_any_instance_of(UserAuthenticationService).to receive(:current_user).and_return(user)
  end 
end

RSpec.shared_examples "controller rejects unauthenticated requests" do
  context "action" do
    it "returns http status unauthorized" do
      subject
      expect(response).to have_http_status(:unauthorized)
    end
  end
end

RSpec.shared_examples "controller responds with correct status code" do |code|
  context "action" do
    it "returns the correct status code" do
      subject
      expect(response).to have_http_status(code)
    end
  end
end

class JsonApiParams
  attr_accessor :params

  def initialize(inputHash = {})
    @params = {
      data: {
        attributes: inputHash[:attribute_hash],
        id: inputHash[:id],
        relationships: inputHash[:relationship_hash]
      }
    }
  end
end