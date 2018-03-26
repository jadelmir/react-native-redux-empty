import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { handleClick } from './actions';
class login extends Component {
	handleClick() {
		this.props.handleClick();
	}
	render() {
		return (
			<View>
				<Text>HELLO I AM THE LOGIN</Text>
				<Button title="hello" onPress={this.handleClick.bind(this)} />
			</View>
		);
	}
}
export default connect(null, { handleClick })(login);
