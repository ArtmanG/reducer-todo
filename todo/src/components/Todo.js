import React from 'react';

const Todo = (props) => {
    return (
        <div>
            {props.state.map((state) => {
                return (
                    <p key={state.id}>{state.item}</p>
                )
            })}
        </div>
    )
};

export default Todo;