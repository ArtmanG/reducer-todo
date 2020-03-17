import React from 'react';

const Todo = (props) => {
    return (
        <ul>
            {props.state.todos.map(({item, completed, id}) => {
                return (
                    <li
                        style={{ textDecoration: props.completed ? 'line-through' : '' }}

                        onClick={() => {
                            props.dispatch({
                                type: 'TOGGLE_COMPLETED',
                                payload: {item, completed, id}
                            })
                        }}
                    >
                        {item}
                    </li>
                )
            })}
        </ul>
    )
};

export default Todo;

