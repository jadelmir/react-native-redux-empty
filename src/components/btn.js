import React from 'react';
import { View, Button, StyleSheet, Platform } from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR } from './theme';
const styles = StyleSheet.create({
	main: {
		backgroundColor: 'transparent',
		marginTop: 10,
		marginBottom: 10,
		margin: 7
	},

	default: {
		backgroundColor: Platform.OS === 'ios' ? SECONDARY_COLOR : 'transparent',
		margin: 4,
		padding: Platform.OS === 'ios' ? 4 : 0,
		borderRadius: 0
	},
	button: {
		height: Platform.OS === 'ios' ? 26 : 30,
		borderColor: 'gray',
		borderWidth: 1,
		fontSize: 13,
		padding: 4,
		margin: 15,
		// color:'white',
		borderRadius: 0
		//fontFamily:'Zetta Serif'
	}
});

const btn = props => (
	<View style={styles.main}>
		<View style={styles.default}>
			<Button
				style={styles.button}
				title={props.title}
				accessibilityLabel="Ok, Great!"
				onPress={props.onPress}
				color={Platform.OS === 'ios' ? 'white' : SECONDARY_COLOR}
			/>
		</View>
	</View>
);

export default btn;
