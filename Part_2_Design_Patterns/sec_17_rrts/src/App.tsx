import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Todo, fetchTodos, removeTodo } from './redux/actions/todos/actions';
import { StoreState } from './redux/reducers/reducers';

interface AppProps {
  section?: number;
  todos: Todo[];
  fetchTodos(): typeof fetchTodos;
  removeTodo(): typeof removeTodo;
}

interface AppState {
  isFetching: boolean;
}

// interface AppState {
//   counter: number;
// }

// class-based component
// class App extends React.Component<AppProps, AppState> {
//   constructor(props: AppProps) {
//     super(props);

//     this.state = {counter: 0};
//   }

//   add = (): void => {
//     this.setState({counter: this.state.counter + 1});
//   }

//   subtract = (): void => {
//     this.setState({counter: this.state.counter - 1});
//   }

//   render(): JSX.Element {
//     return (
//       <div style={{textAlign: 'center', marginTop: '100px'}}>
//         <h1>Sec {this.props.section} | React & Redux with TypeScript</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.subtract}>Subtract</button>
//         <h2>{this.state.counter}</h2>
//       </div>
//     )
//   }
// }

// function-based component
const App: React.FC<AppProps> = (
  {section}: AppProps, 
  {isFetching}: AppState
): JSX.Element => {
  const [isLoading, setIsLoading] = useState(isFetching);
  const todos = useSelector((state: StoreState) => state.todos);
  const dispatch = useDispatch();

  const handleBtnClick = (): void => {
    setIsLoading(true);

    setTimeout(() => {
      dispatch(fetchTodos());
      setIsLoading(false);  
    }, 3000);
  };

  return (
    <div style={{textAlign: 'center', marginTop: '100px'}}>
      <h1>Sec {section} | React & Redux with TypeScript</h1>
      <button onClick={() => handleBtnClick()}>Fetch</button>
      {
        isLoading 
        ? <h2>Loading...</h2> 
        : todos.map(
          (todo: Todo) => 
            <ul 
              key={todo.id}
              style={{
                marginTop: '30px', 
                cursor: 'pointer', 
                listStyleType: 'none'
              }} 
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              <li>{todo.title}</li>
            </ul>
        )
      }
    </div>
  );
};

export default App;
