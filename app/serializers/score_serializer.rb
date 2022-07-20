class ScoreSerializer
    include FastJsonapi::ObjectSerializer
    attributes :time, :initials

    belongs_to :photo
end