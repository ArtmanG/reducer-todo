export const initialState = {
    todos: [
        {
            item: 'Build a default reducer and initial state',
            completed: false,
            id: 123456789,
        },
        {
            item: 'Set up state in component',
            completed: false,
            id: 234567891,
        },
        {
            item: 'Add todos',
            completed: false,
            id: 345678912,
        },
        {
            item: 'Toggle completed',
            completed: false,
            id: 456789123,
        },
        {
            item: 'Clearing completed todos',
            completed: false,
            id: 567891234,
        }
    ]
};

console.log(initialState);

export const todoReducer = (state, action) => {
    switch(action.type){

        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        item: action.item,
                        completed: false,
                        id: action.id
                    }
                ]
            };

        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    return todo.id === action.id ? {...todo, completed: !todo.completed} : todo;
                })
            }

        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todos: state.todos.filters(todo => {
                    return todo.completed === false;
                })
            }

        default:
            return state;
    }
}