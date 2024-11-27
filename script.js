// Récupération des éléments HTML
const todoList = document.getElementById("todo-list");
const newItemPanel = document.getElementById("new-item");
const editItemPanel = document.getElementById("edit-item");

const newTodoInput = document.getElementById("new-todo-item-title");
const newTodoButton = document.getElementById("new-todo-item-add");

const editTodoInput = document.getElementById("edit-todo-item-title");
const editTodoConfirmButton = document.getElementById("edit-todo-item-confirm");
const editTodoCancelButton = document.getElementById("edit-todo-item-cancel");

// Variable pour stocker l'élément actuellement en modification
let itemBeingEdited = null;

function addTodoItem() {
    const title = newTodoInput.value.trim();
    if (title === "") return; // Ignore si l'entrée est vide

    // Crée un nouvel élément de la liste
    const listItem = document.createElement("li");
    const titleSpan = document.createElement("span");
    titleSpan.textContent = title;

    // Boutons pour modification et suppression
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => enterEditMode(listItem);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTodoItem(listItem);

    // Ajoute les éléments au listItem
    listItem.appendChild(titleSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    // Ajoute l'item à la liste
    todoList.appendChild(listItem);

    // Réinitialise l'entrée
    newTodoInput.value = "";
}