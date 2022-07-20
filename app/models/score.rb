class Score < ApplicationRecord
    belongs_to :photo

    validates :initials, :time, presence: true
    validates :initials, length: { in: 1..3 }
end