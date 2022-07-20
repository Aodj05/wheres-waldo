class CreateScores < ActiveRecord::Migration[7.0]
    def change
        create_table :scores do |t|
            t.string :time
            t.string :initials

            t.timestamps
        end
    end
end