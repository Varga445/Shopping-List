var button = document.getElementById("Add");
var input = document.getElementById("input");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li");


var deleteButton;

function inputUser() {
    return input.value.length;
}
function createDeleteButton(parent) {

    var button = document.createElement("button");

    button.appendChild(document.createTextNode("Delete"));

    button.className = "delete";

    parent.appendChild(button);
}



function toggleDoneClass() {
    this.classList.toggle("done");
}


function createListElement() {

    var li = document.createElement("li");
    var span = document.createElement("span");

    li.appendChild(span);
    span.appendChild(document.createTextNode(input.value));

   ul.appendChild(li);

  createDeleteButton(li);

  deleteButton = document.querySelectorAll(".delete")

  updateDeleteButtons()

  li.addEventListener('click', toggleDoneClass)

  input.value = "";
}


function addListAfterClick() {

    if (inputUser() > 0) { createListElement(); }
}

function addListAfterKeypress(event) {
    if (inputUser() > 0 && event.keyCode === 13) { //key code 13 = enter
        createListElement();
    }
}

function checkforitems(){


}
checkforitems();


function updateDeleteButtons() {
    for (var i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", function() {
            this.parentNode.remove()
        })
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', toggleDoneClass);

    createDeleteButton(lis[i])
}

deleteButton = document.querySelectorAll(".delete")

updateDeleteButtons()
