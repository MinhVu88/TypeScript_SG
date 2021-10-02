import { FetchedTodos, RemovedTodo } from './actions';

export enum ActionTypesEnum {
  fetchTodos,
  deleteTodo
}

export type Action = FetchedTodos | RemovedTodo;