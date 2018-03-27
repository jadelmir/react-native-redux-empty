import { combineReducers } from 'redux';

import { navReducer } from './navReducer';
import loginReducer from 'login/loginReducer';
export const appReducer = combineReducers({
	nav: navReducer,
	authRed: loginReducer
});
