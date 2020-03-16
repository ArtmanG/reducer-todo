import React, { useState, useReducer } from 'react';

import { todoReducer, initialState } from '../reducers/TodoReducer';

const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newTodo, setNewTodo] = useState('');

    const handleChange = e => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

    }

    return (
        <div>
            <h1>Reducer Todo-List</h1>
            <div>
                <input
                    className='todo-input'
                    type='text'
                    name='newTodo'
                    value={newTodo}
                    onChange={handleChange}
                />
                <button
                    onSubmit={() => {
                        dispatch({ type: 'ADD_TODO', payload: newTodo })}
                    }
                >
                    Add new Task
                </button>
            </div>
        </div>
    )
}

export default Todo;