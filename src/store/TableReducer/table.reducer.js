export const tableReducer = (state = { num: 0 }, action) => {
    switch (action.type) {
        case 'TABLE_ADD':
            state.num++;
            return { ...state };
        case 'TABLE_REDUCE':
            state.num--;
            return { ...state }
        default:
            return state;
    }
}
