let idCounter = 0;

const todoFactory = message => {
    return {
        id: ++idCounter,
        message,
        done: false,
        complete() {
            this.done = true
        },
        toggle() {
            this.done = !this.done
        }
    }
}

let todoList = [];

function add(task) {
    if (task) {
        todoList.push(task);
    } 
}

function toggleTaskStatus(taskId) {
    const existedTask = todoList.find(item => item.id === taskId);

    if (existedTask) {
        existedTask.done = !existedTask.done;
    }
}

function remove(taskId) {
    todoList = todoList.filter(item => item.id !== taskId);
}

function removeMany(taskIds = []) {
    todoList = todoList.filter(item => !taskIds.includes(item.id));
}

function getActiveTasks() {
    return todoList.filter(item => !item.done);
}

// Добавим задач
add(todoFactory('Задание 1'));
add(todoFactory('Задание 2'));
add(todoFactory('Задание 3'));
add(todoFactory('Задание 4'));

// Завершим некоторые таски
todoList[2].complete();
console.log(todoList);

// Получим только активные
console.log(getActiveTasks());
