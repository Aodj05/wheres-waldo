class Photo < ApplicationRecord
    has_many :subjects, dependent: :destroy
    has_many :scores, dependent: :destroy
end