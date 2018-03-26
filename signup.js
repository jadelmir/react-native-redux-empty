import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
class signup extends Component {
	render() {
		return (
			<View>
				<Text>HELLO I AM THE signup</Text>
			</View>
		);
	}
}
export default connect()(signup);
