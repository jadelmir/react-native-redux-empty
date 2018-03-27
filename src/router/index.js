import signup from 'signup/';
import login from 'login/';
import { StackNavigator } from 'react-navigation';
import { mainNavigator } from './mainNavigator';

export const AppNavigator = StackNavigator(
	{
		Login: login,
		signupScreen: signup,
		app: mainNavigator
	},
	{
		headerMode: 'null'
	}
);
