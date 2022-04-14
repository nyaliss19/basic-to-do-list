function newItem() {
  let list = $("#list");
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  list.append(li);
  li.append(inputValue);

  li.on("dblclick", function () {
    li.addClass("strike");
  });

  let deleteButton = $("<crossOutButton></crossOutButton>");
  deleteButton.append(document.createTextNode("X"));
  li.append(deleteButton);

  deleteButton.on("click", function deleteListItem() {
    li.addClass("delete");
  }),
    $("#list").sortable();
}
