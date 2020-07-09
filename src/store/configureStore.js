import { createStore, combineReducers } from 'redux';
import goalsReducer from '../reducers/goals';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            goals: goalsReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}

