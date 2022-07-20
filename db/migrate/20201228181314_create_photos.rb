class CreatePhotos < ActiveRecord::Migrations[7.0]
    def change
        create_table :photos do |t|
            t.string :name

            t.timestamps
        end
    end
end