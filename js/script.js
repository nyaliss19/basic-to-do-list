function newItem() {
  //javascript
  //1. Adding a new item to the list of items:
  // let li = document.createElement("li");
  // let inputValue = document.getElementById("input").value;
  // let text = document.createTextNode(inputValue);
  // li.appendChild(text);
  //
  // if (inputValue === "") {
  //   alert("You must write something!");
  // } else {
  //   let list = document.querySelector("#list");
  //   list.appendChild(li);
  // }

  //jquery
  let list = $("#list");
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  list.append(li);
  li.append(inputValue);

  //2. Crossing out an item from the list of items:
  // function crossOut() {
  //   li.classList.toggle("strike");
  // }
  //
  // li.addEventListener("dblclick", crossOut);

  //jquery
  li.on("dblclick", function () {
    li.addClass("strike");
  });

  //3(i). Adding the delete button "X":
  // let crossOutButton = document.createElement("crossOutButton");
  // crossOutButton.appendChild(document.createTextNode("X"));
  // li.appendChild(crossOutButton);
  //
  // crossOutButton.addEventListener("click", deleteListItem);

  //jquery
  let deleteButton = $("<crossOutButton></crossOutButton>");
  deleteButton.append(document.createTextNode("X"));
  li.append(deleteButton);
  //
  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  function deleteListItem() {
    li.addClass("delete");
  }
  // 4. Reordering the items:
  $("#list").sortable();
}
