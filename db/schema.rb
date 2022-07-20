# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_08_023858) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "photos", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_url"
  end

  create_table "scores", force: :cascade do |t|
    t.string "time"
    t.string "initials"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "photo_id"
    t.index ["photo_id"], name: "index_scores_on_photo_id"
  end

  create_table "subjects", force: :cascade do |t|
    t.string "name"
    t.bigint "photo_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_url"
    t.index ["photo_id"], name: "index_subjects_on_photo_id"
  end

  create_table "target_boxes", force: :cascade do |t|
    t.integer "top"
    t.integer "bottom"
    t.integer "left"
    t.integer "right"
    t.bigint "subject_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["subject_id"], name: "index_target_boxes_on_subject_id"
  end

  add_foreign_key "scores", "photos"
  add_foreign_key "subjects", "photos"
  add_foreign_key "target_boxes", "subjects"
end