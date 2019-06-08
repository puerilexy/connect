export const listReducer = (state = [], action) => {
    switch (action.type) {
        case 'LIST_ADD':
            state.push(action.list);
            return [...state];
        default:
            return state;
    }
}