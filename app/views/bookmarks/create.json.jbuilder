if @bookmark.persisted?
  json.form render(partial: "lists/new_bookmark_form", formats: :html, locals: {path: [@list, Bookmark.new]}) #reset the form if successful
  json.persisted_item render(partial: "lists/bookmark_card", formats: :html, locals: {bookmark: @bookmark})
else
  json.form render(partial: "lists/new_bookmark_form", formats: :html, locals: {path: [@list, @bookmark]})
end
