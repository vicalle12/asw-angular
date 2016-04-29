json.array!(@asks) do |ask|
  json.extract! ask, :id, :titulo, :user_id, :puntos, :text
  json.url ask_url(ask, format: :json)
end
