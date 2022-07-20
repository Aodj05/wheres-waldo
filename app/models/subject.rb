class Subject < ApplicationRecord
    belongs_to :photo

    has_one :target_box
end