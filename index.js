// Task 3: Fetch and Display To-Do List
const fetchTodos = async () => {
    try {
        const BASE_URL = "https://jsonplaceholder.typicode.com/todos";
        const response = await fetch(BASE_URL);
        const todos = await response.json();
        const todoList = document.getElementById("todoList");

        todos.forEach(todo => {
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
            listItem.innerHTML = `
                <span>${todo.title}</span>
                <input type="checkbox" ${todo.completed ? "checked" : ""}>
            `;

            // Event listener to toggle completion
            const checkbox = listItem.querySelector("input[type='checkbox']");
            checkbox.addEventListener("change", () => {
                listItem.classList.toggle("list-group-item-success", checkbox.checked);
            });

            if (todo.completed) {
                listItem.classList.add("list-group-item-success");
            }

            todoList.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error fetching todos:", error);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    fetchTodos();
});