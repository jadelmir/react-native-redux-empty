import main from 'main/';
import Icon from 'react-native-ionicons';
import {
	TabNavigator,
	navigationOptions,
	TabBarBottom
} from 'react-navigation';
import React from 'React';

export const mainNavigator = TabNavigator(
	{
		mainPage: {
			screen: main,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Icon ios="ios-add" android="md-add" color={tintColor} />
				)
			}
		}
	},
	{
		tabBarComponent: TabBarBottom,
		tabBarPosition: 'bottom',
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray'
		},
		animationEnabled: false,
		swipeEnabled: false
	}
);
// ClientList: {
//     screen: ClientRequestStack,
//      navigationOptions: {
//
//
//     },
//   },
