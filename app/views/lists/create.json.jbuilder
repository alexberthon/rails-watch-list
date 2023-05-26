if @list.persisted?
  json.form render(partial: "lists/new_list_form", formats: :html, locals: {list: List.new}) #reset the form if successful
  json.persisted_item render(partial: "lists/list_card", formats: :html, locals: {list: @list})
else
  json.form render(partial: "lists/new_list_form", formats: :html, locals: {list: @list})
end
