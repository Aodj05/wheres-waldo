class PhotoSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :image_url

    has_many :subjects
    has_many :scores
end