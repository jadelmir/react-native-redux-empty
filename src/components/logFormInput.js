import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR } from './theme';
const styles = StyleSheet.create({
	main: {
		backgroundColor: 'transparent',
		marginTop: 10,
		marginBottom: 10,
		margin: 7
	},

	default: {
		backgroundColor: Platform.OS === 'ios' ? 'transparent' : 'transparent',
		margin: 4,
		padding: Platform.OS === 'ios' ? 4 : 0,
		borderRadius: 0,
		borderBottomWidth: 1,
		borderColor: 'gray'
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
	},
	TextInput: {
		color: SECONDARY_COLOR,
		paddingTop: '5%',
		paddingBottom: '5%'
	}
});

const logFormInput = props => (
	<View style={styles.main}>
		<View style={styles.default}>
			<TextInput
				onChangeText={props.onInputChange}
				placeholder={props.title}
				style={styles.TextInput}
				underlineColorAndroid="transparent"
				autoCorrect={false}
			/>
		</View>
	</View>
);

export default logFormInput;
