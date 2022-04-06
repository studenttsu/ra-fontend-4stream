const todoForm = document.getElementById('todo-form');
const emptyMessageEl = document.getElementById('empty-taks-message');
const todoListEl = document.getElementById('todo-list');

async function fetchTodos(todoItemId = '') {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoItemId}`);
    return response.json();
}

async function createTodo(title) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({ title })
    });

    return response.json();
}

async function initTodoApp() {
    const todos = await fetchTodos();

    // todos.splice(0, 10);

    todos
        .filter((todos, index) => index <= 10)
        .forEach(todo => {
            const el = createTodoElement(todo.title);
            todoListEl.append(el);
        });
    // наполнение ui данными
}

initTodoApp();

// Получать только активные таски
function getActiveTasks() {
    return Array
        .from(todoListEl.children)
        .filter(el => !el.classList.contains('done'))
        .map(el => el.querySelector('span').textContent)
        .sort((a, b) => a > b ? 1 : -1);
}

function printActiveTasks() {
    console.table(getActiveTasks());
}

todoListEl.addEventListener('click', event => {
    const { target } = event;

    if (target.tagName === 'BUTTON') {
        const { action } = target.dataset;
        const todoItemEl = target.closest('li');

        switch (action) {
            case 'done': {
                todoItemEl.remove();

                if (todoListEl.children.length === 0) {
                    emptyMessageEl.hidden = false;
                }
            }; break;

            case 'toggle': {
                todoItemEl.classList.toggle('done');
            }; break;
        }
    }
});

todoForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { task, checkItem } = event.target.elements;
    const value = task.value;

    if (value) {
        const { id } = await createTodo(value);
        const createdTodoItem = await fetchTodos(id);

        const todoElement = createTodoElement(createdTodoItem.title);
        todoListEl.appendChild(todoElement);
    
        todoForm.reset();
    }

    if (todoListEl.children.length > 0) {
        emptyMessageEl.hidden = true;
    }
});

function createTodoElement(task) {
    const el = document.createElement('li');
    el.classList.add('todo-item');

    el.innerHTML = `
        <span>${task}</span>
        <button data-action="toggle">Toggle</button> 
        <button data-action="done">Done</button> 
    `;

    return el;
}