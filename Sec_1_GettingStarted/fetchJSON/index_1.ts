import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const {id, title, completed} = response.data as Todo;

    // incorrect order of args -> undetected compile-time bugs
    logTodo_0(id, completed, title);

    // well-positioned args, thanks to typescript's type annotations
    logTodo_1(id, title, completed);
});

const logTodo_0 = (id, title, completed) => console.log(`\n* logTodo_0 id: ${id} | Title: ${title} | Finished? -> ${completed}\n`);

const logTodo_1 = (id: number, title: string, completed: boolean) => console.log(`\n* logTodo_1 id: ${id} | Title: ${title} | Finished? -> ${completed}\n`);