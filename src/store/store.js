import { createStore, combineReducers } from 'redux';
import { searchReducer } from '../reducers/searchReducer';
import { dishesReducer } from '../reducers/dishesReducer';
import { userReducer } from '../reducers/userReducer';

const reducers = combineReducers({
	recipes: dishesReducer,
	search: searchReducer,
	user: userReducer,
});

export const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
