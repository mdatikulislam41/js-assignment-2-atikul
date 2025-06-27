console.clear();
const submit = document.querySelector("#submit");
const val = document.querySelector("#todo-input");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (val.value.trim() === "") {
        alert("Please enter a valid todo item.");
        return;
    }
    
    const todoItem = document.createElement("li");
    todoItem.className = "flex justify-between items-center bg-gray-100 p-2 mb-2 rounded text-black";
    todoItem.textContent = val.value;
    
    const deleteButton = document.createElement("button");
    deleteButton.className = "cursor-pointer";
    deleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    deleteButton.addEventListener("click", () => {
        todoItem.remove();
    });
    
    todoItem.appendChild(deleteButton);
    
    const todoList = document.querySelector("#todo-list");
    todoList.appendChild(todoItem);
    
    val.value = "";
});