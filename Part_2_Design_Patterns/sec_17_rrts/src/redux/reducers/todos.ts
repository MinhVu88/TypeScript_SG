import { Todo, ActionTypesEnum, Action } from '../actions';

export const todosReducer = (
  state: Todo[] = [], 
  action: Action
) => {
  switch(action.type) {
    case ActionTypesEnum.fetchTodos:
      return action.payload;
    case ActionTypesEnum.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};