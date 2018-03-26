/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
	StackNavigator,
	addNavigationHelpers,
	NavigationActions
} from 'react-navigation';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {
	createReduxBoundAddListener,
	createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import React from 'react';
import login from './login';
import signup from './signup';
const AppNavigator = StackNavigator({
	Login: login,
	signupScreen: signup
});

const initialState = AppNavigator.router.getStateForAction(
	AppNavigator.router.getActionForPathAndParams('Login')
);

const navReducer = (state = initialState, action) => {
	let nextAction;
	switch (action.type) {
		case 'GOTO_SIGNUP':
			console.log('we are here');
			nextAction = NavigationActions.navigate({
				routeName: 'signupScreen'
			});
			break;
	}

	const nextState = AppNavigator.router.getStateForAction(
		nextAction || action,
		state
	);

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
};

const appReducer = combineReducers({
	nav: navReducer
});

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const middleware = createReactNavigationReduxMiddleware(
	'root',
	state => state.nav
);
const addListener = createReduxBoundAddListener('root');

class App extends React.Component {
	render() {
		return (
			<AppNavigator
				navigation={addNavigationHelpers({
					dispatch: this.props.dispatch,
					state: this.props.nav,
					addListener
				})}
			/>
		);
	}
}

const mapStateToProps = state => ({
	nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(appReducer, applyMiddleware(middleware));

export default class Root extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}
