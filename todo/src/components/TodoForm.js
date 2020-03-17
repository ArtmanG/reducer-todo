import React, {useState} from 'react';

const TodoForm = (props) => {
    const [newTodo, setNewTodo] = useState('');

    const handleChange = e => {
        e.preventDefault();
        setNewTodo(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setNewTodo('')
    };

    const ADD_TODO = {
        type: 'ADD_TODO',
        payload: newTodo,
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className='todo-input'
                    type='text'
                    name='newTodo'
                    value={newTodo}
                    onChange={handleChange}
                />
                
                <button
                    onClick={() => props.dispatch(ADD_TODO)}
                >
                    Add New Task
                </button>
            </form>
        </div>
    )
}

export default TodoForm;
