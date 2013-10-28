class Slide < ActiveRecord::Base
  attr_accessible :imagen, :link, :caption

  mount_uploader :imagen, SliderUploader
end
