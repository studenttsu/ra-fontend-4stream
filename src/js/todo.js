const todoForm = document.getElementById('todo-form');
const emptyMessageEl = document.getElementById('empty-taks-message');
const todoListEl = document.getElementById('todo-list');

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

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const { task, checkItem } = event.target.elements;
    const value = task.value;

    if (value) {
        const todoElement = createTodoElement(value.trim());
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


// const divEl = document.createElement('div');

// divEl.addEventListener('click', clickHandler);
// divEl.removeEventListener('click', clickHandler);

// function clickHandler() {}