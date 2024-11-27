const todoList = document.getElementById("todo-list");
const newItemPanel = document.getElementById("new-item");
const editItemPanel = document.getElementById("edit-item");

const newTodoInput = document.getElementById("new-todo-item-title");
const newTodoButton = document.getElementById("new-todo-item-add");

const editTodoInput = document.getElementById("edit-todo-item-title");
const editTodoConfirmButton = document.getElementById("edit-todo-item-confirm");
const editTodoCancelButton = document.getElementById("edit-todo-item-cancel");

let itemBeingEdited = null;

function addTodoItem() {
    const title = newTodoInput.value.trim();
    if (title === "") return;

    const listItem = document.createElement("li");
    const titleSpan = document.createElement("span");
    titleSpan.textContent = title;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => enterEditMode(listItem);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTodoItem(listItem);

    listItem.appendChild(titleSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);

    newTodoInput.value = "";
}

function enterEditMode(listItem) {
    itemBeingEdited = listItem;
    const currentTitle = listItem.querySelector("span").textContent;

    editTodoInput.value = currentTitle;

    newItemPanel.hidden = true;
    editItemPanel.hidden = false;
}

function confirmEdit() {
    if (itemBeingEdited) {
        const updatedTitle = editTodoInput.value.trim();
        if (updatedTitle !== "") {
            itemBeingEdited.querySelector("span").textContent = updatedTitle;
        }
    }

    exitEditMode();
}

function cancelEdit() {
    exitEditMode();
}

function exitEditMode() {
    itemBeingEdited = null;
    newItemPanel.hidden = false;
    editItemPanel.hidden = true;
}

function deleteTodoItem(listItem) {
    todoList.removeChild(listItem);
}

newTodoButton.addEventListener("click", addTodoItem);
editTodoConfirmButton.addEventListener("click", confirmEdit);
editTodoCancelButton.addEventListener("click", cancelEdit);