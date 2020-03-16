export const initialState = {
    item: '',
    completed: false,
    id: Date.now()
};

export const todoReducer = (state, action) => {
    console.log(action);
    
    return state;
}