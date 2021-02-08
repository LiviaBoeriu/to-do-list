/* Select elements from the DOM */
const clearButton = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const toDoList = document.getElementById("list");
const addInput = document.getElementById("add-item-text");


/* Declare the list to store the todos */
let List = [];
let id = 0;



/* Add todo function */
function addTodo(todo) {
    const todo = `<li class="item">
    <input type="checkbox" id="item-checkbox" name="item-checkbox" value="item">
    <p class="item-text">${todo}</p>
    <i class="fas fa-trash" job="delete"></i>
    </li>`;

    const position = `beforeEnd`;

    toDoList.insertAdjacentHTML(position,text);
}

document.addEventListener("keyup", function(event){
    if(event.key == 13) {
        const todo = addInput.value;
        
        if (todo) {
            addTodo(todo, itemId, false, false);
            List.push({
                item: todo,
                id: itemId,
                completed: false,
                delete: false
            });
        }   
        addInput.value = "";
        itemId++;
    }
});
