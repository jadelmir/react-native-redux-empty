import signup from 'signup/';
import login from 'login/';
import { StackNavigator } from 'react-navigation';

export const AppNavigator = StackNavigator({
	Login: login,
	signupScreen: signup
});
