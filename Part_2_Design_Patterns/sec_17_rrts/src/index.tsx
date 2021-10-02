import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import { reducers } from './redux/reducers/reducers';
import { fetchTodos, removeTodo } from './redux/actions/todos/actions';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App 
      section={17} 
      todos={[]} 
      fetchTodos={() => fetchTodos} 
      removeTodo={() => removeTodo}
    />
  </Provider>,
  document.getElementById('root')
);
