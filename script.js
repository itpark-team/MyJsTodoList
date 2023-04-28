class TodoItem {
    constructor(id, date, description) {
        this.id = id;
        this.date = date;
        this.description = description;
    }
}

let todoItems = [];
let todoItemsId = 0;

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDateToDDMMYYYY(date) {
    return [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1), date.getFullYear()].join(".");
}

function showTodoItems() {
    let tableTodoItemsDiv = document.getElementById("table-todo-items-div");

    let html = "";

    html += `<table class="table">`;
    html += `<thead>
        <tr>
            <th>№</th>
            <th>Дата</th>
            <th>Задача</th>
            <th>Действие</th>
        </tr>
        </thead>`;
    html += `<tbody>`;

    for (let i = 0; i < todoItems.length; i++) { 
        html += `<tr>
        <td>${todoItems[i].id}</td>
        <td>${formatDateToDDMMYYYY(todoItems[i].date)}</td>
        <td>${todoItems[i].description}</td>
        <td><button class="btn btn-danger" onclick="buttonDeleteTodoItemByIdClick(${todoItems[i].id})">Удалить</button></td>
        </tr>`;
    }

    html += `</tbody>`;
    html += `</table>`;

    tableTodoItemsDiv.innerHTML = html;
}

function buttonAddTodoItemClick() {
    let inputDateField = document.getElementById("input-date-field");
    let inputDescriptionField = document.getElementById("input-description-field");

    todoItemsId++;

    let newTodoItem = new TodoItem(
        todoItemsId,
        new Date(inputDateField.value),
        inputDescriptionField.value
    );

    todoItems.push(newTodoItem);

    inputDateField.valueAsDate = new Date();
    inputDescriptionField.value = "";

    showTodoItems();
}

function buttonDeleteTodoItemByIdClick(id){
    let findIndex = todoItems.findIndex(todoItem => {
        return todoItem.id === id;
    });

    todoItems.splice(findIndex, 1);

    showTodoItems();
}