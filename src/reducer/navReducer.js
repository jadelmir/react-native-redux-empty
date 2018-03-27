import { AppNavigator } from 'router/';
import { NavigationActions } from 'react-navigation';
const initialState = AppNavigator.router.getStateForAction(
	AppNavigator.router.getActionForPathAndParams('Login')
);

export const navReducer = (state = initialState, action) => {
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
