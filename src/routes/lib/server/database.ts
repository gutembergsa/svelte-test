type Todo = {
    id: number;
    text: string;
    completed: boolean;
}

export let todos: Todo[] = [
    {
        id: 1,
        text: 'Learn TypeScript',
        completed: false
    },
    {
        id: 2,
        text: 'Work on Clipboard Health project',
        completed: false
    },
    {
        id: 3,
        text: 'Review pull requests',
        completed: false
    },
    {
        id: 4,
        text: 'Write unit tests',
        completed: false
    }
];


export function addTodo(todo: string) {
    todos.push({
        id: Date.now(),
        text: todo,
        completed: false
    });
}

export function removeTodo(id: number) {
    todos = todos.filter(todo => todo.id !== id);
}

export function updateTodo(id: number, updatedTodo: Todo) {
    todos = todos.map(todo => todo.id === id ? updatedTodo : todo);
}