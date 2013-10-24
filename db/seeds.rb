require 'factory_girl'
require 'database_cleaner'

DatabaseCleaner.strategy = :truncation


DatabaseCleaner.clean

# FactoryGirl.create :admin
10.times do
  FactoryGirl.create :slide
end

10.times do
  FactoryGirl.create :auspiciador
end
