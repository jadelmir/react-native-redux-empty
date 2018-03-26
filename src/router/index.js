import signup from '../screens/signup';
import login from '../screens/login/login';
import {
	StackNavigator,
	addNavigationHelpers,
	NavigationActions
} from 'react-navigation';

export const AppNavigator = StackNavigator({
	Login: login,
	signupScreen: signup
});
