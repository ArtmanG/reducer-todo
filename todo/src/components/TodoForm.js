import React, {useState} from 'react';

const TodoForm = (props) => {
    const [newTodo, setNewTodo] = useState('');

    const handleChange = e => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setNewTodo('')
    };

    const addTodo = {
        type: 'ADD_TODO',
        item: newTodo,
        completed: false,
        id: Date.now()
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
                    onClick={() => props.dispatch(addTodo)}
                >
                    Add New Task
                </button>
            </form>
        </div>
    )
}

export default TodoForm;
