class Link < ActiveRecord::Base
  belongs_to :domain
  has_many :notes
  has_many :users, through: :notes
end
