class SubjectSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :image_url

    has_one :target_box
    belongs_to :photo
end