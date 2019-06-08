import { createStore, combineReducers } from 'redux';
import { listReducer } from './ListReducer/list.reducer';
import { tableReducer } from './TableReducer/table.reducer'

let reducer = combineReducers({
    listReducer,
    tableReducer
})

let store = createStore(reducer);

export default store;
