import axios from "axios";
import { Dispatch } from 'redux';
import { ActionTypesEnum } from './actionTypesEnum';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchedTodos {
  type: ActionTypesEnum.fetchTodos;
  payload: Todo[];
}

export interface RemovedTodo {
  type: ActionTypesEnum.deleteTodo;
  payload: number;
}

const apiUrl = 'https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5';

export const fetchTodos = (): Function => {
  return async(dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(apiUrl);

    dispatch<FetchedTodos>({
      type: ActionTypesEnum.fetchTodos,
      payload: response.data
    });
  };
};

export const removeTodo = (id: number): RemovedTodo => {
  return {
    type: ActionTypesEnum.deleteTodo,
    payload: id
  };
};