import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-ionicons';
class main extends Component {
	render() {
		return (
			<View>
				<Text>hello nigas</Text>
				<Icon android="md-add" ios="ios-add" />
			</View>
		);
	}
}
export default connect(null, {})(main);
