class AddImageUrlToSubjects < ActiveRecors::Migration[7.0]
    def change
        add_column :subjects, :image_url, :string
    end
end