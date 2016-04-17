# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160417173813) do

  create_table "contributions", force: :cascade do |t|
    t.string   "titulo"
    t.integer  "user_id"
    t.string   "url"
    t.string   "fecha"
    t.integer  "puntos"
    t.string   "comentarios"
    t.string   "tipo"
    t.string   "text"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "contributions", ["user_id", "created_at"], name: "index_contributions_on_user_id_and_created_at"
  add_index "contributions", ["user_id"], name: "index_contributions_on_user_id"

  create_table "users", force: :cascade do |t|
    t.string   "user"
    t.string   "password"
    t.integer  "created"
    t.integer  "karma"
    t.string   "about"
    t.string   "email"
    t.boolean  "showdead"
    t.boolean  "noprocrast"
    t.integer  "maxvisit"
    t.integer  "minaway"
    t.integer  "delay"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
