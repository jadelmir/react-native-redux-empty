import { createStore, applyMiddleware, combineReducers } from 'redux';

import { navReducer } from './navReducer';

export const appReducer = combineReducers({
	nav: navReducer
});
