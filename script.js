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

// Fonction pour ajouter un nouvel item
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

// Fonction pour entrer en mode édition
function enterEditMode(listItem) {
    itemBeingEdited = listItem;
    const currentTitle = listItem.querySelector("span").textContent;

    // Met à jour l'input d'édition avec le texte actuel
    editTodoInput.value = currentTitle;

    // Affiche le panneau d'édition et masque le panneau d'ajout
    newItemPanel.hidden = true;
    editItemPanel.hidden = false;
}

// Fonction pour confirmer la modification
function confirmEdit() {
    if (itemBeingEdited) {
        const updatedTitle = editTodoInput.value.trim();
        if (updatedTitle !== "") {
            itemBeingEdited.querySelector("span").textContent = updatedTitle;
        }
    }

    // Quitte le mode d'édition
    exitEditMode();
}

// Fonction pour annuler la modification
function cancelEdit() {
    // Quitte le mode d'édition sans modifier
    exitEditMode();
}

// Fonction pour quitter le mode édition
function exitEditMode() {
    itemBeingEdited = null;
    newItemPanel.hidden = false;
    editItemPanel.hidden = true;
}

// Fonction pour supprimer un item
function deleteTodoItem(listItem) {
    todoList.removeChild(listItem);
}

// Ajout d'événements pour les boutons
newTodoButton.addEventListener("click", addTodoItem);
editTodoConfirmButton.addEventListener("click", confirmEdit);
editTodoCancelButton.addEventListener("click", cancelEdit);