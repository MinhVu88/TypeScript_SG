import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    // just plain JS (BUGGY)
    const todo_0 = response.data;

    const id_0 = todo_0.ID;
    const title_0 = todo_0.Title;
    const finished_0 = todo_0.finished;

    console.log(`\n* todo_0 id: ${id_0} | Title: ${title_0} | Finished? -> ${finished_0}\n`);

    // with TypeScript
    const todo_1 = response.data as Todo;

    const id_1 = todo_1.id;
    const title_1 = todo_1.title;
    const finished_1 = todo_1.completed;

    console.log(`\n* todo_1 id: ${id_1} | Title: ${title_1} | Finished? -> ${finished_1}\n`);
});