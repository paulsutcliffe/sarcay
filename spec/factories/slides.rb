require 'faker'

FactoryGirl.define do
  factory :slide do
    imagen { Rack::Test::UploadedFile.new(File.join(Rails.root,'spec','support','images','img-slide1.jpg'))}
    link { Faker::Internet.url }
  end
end
