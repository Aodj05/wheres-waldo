class TargetBoxSerializer
    include FastJsonapi::ObjectSerializer
    attributes :top, :bottom, :left, :right

    belongs_to :subject
end