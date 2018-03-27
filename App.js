/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { addNavigationHelpers } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import {
	createReduxBoundAddListener,
	createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import React from 'react';
import { appReducer } from 'reducer/';
import { AppNavigator } from './src/router/index';
import axios from './src/axiosConfig';
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
