import React from 'react';
import { View, TextInput, StyleSheet, Platform, Text } from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR } from './theme';
const styles = StyleSheet.create({
	main: {
		backgroundColor: 'transparent',
		marginTop: 10,
		marginBottom: 10,
		margin: 7
	},

	text: {
		fontSize: 18,
		textAlign: 'center',
		color: SECONDARY_COLOR,
		paddingTop: '5%',
		paddingBottom: '5%'
	}
});

const title = props => (
	<View style={styles.main}>
		<Text style={styles.text}>IS-CRM</Text>
	</View>
);

export default title;
