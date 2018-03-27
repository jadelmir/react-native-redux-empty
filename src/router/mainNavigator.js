import main from 'main/';
import Icon from 'react-native-ionicons';
import { TabNavigator, navigationOptions } from 'react-navigation';
import React from 'React';

export const mainNavigator = TabNavigator(
	{
		mainPage: {
			screen: main,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Icon ios="ios-add" android="md-add" />
			}
		}
	},
	{
		tabBarPosition: 'bottom',
		tabBarOptions: {
			showIcon: true,
			showLabel: false
		}
	}
);
// ClientList: {
//     screen: ClientRequestStack,
//      navigationOptions: {
//
//
//     },
//   },
