import React, {useReducer} from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import { todoReducer, initialState } from './reducers/TodoReducer';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div className="App">
      <h1>Reducer Todo-List</h1>
      <Todo dispatch={dispatch} state={state} />
      <TodoForm dispatch={dispatch} />
      <button>Delete Completed</button>
      
    </div>
  );
}

export default App;