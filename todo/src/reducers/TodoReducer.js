export const initialState = [
    {
        item: 'Build a default reducer and initial state',
        completed: false,
        id: 3892987589,
    },
    {
        item: 'Set up state in component',
        completed: false,
        id: 3892987590,
    },
    {
        item: 'Add todos',
        completed: false,
        id: 3892987591,
    },
    {
        item: 'Toggle completed',
        completed: false,
        id: 3892987592,
    },
    {
        item: 'Clearing completed todos',
        completed: false,
        id: 3892987593,
    },
    {
        item: 'Stretch',
        completed: false,
        id: 3892987594,
    }
];

console.log(initialState);

export const todoReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                item: action.item,
                completed: false,
                id: action.id
                }
            ]
        default:
            return state;
    }
}