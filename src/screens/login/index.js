import React, { Component } from 'react';
import { View, Text, Button, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { handleLogin, onUsernameChange, onPasswordChange } from './actions';
import Btn from 'components/btn';
import LogFormInput from 'components/logFormInput';
import Title from 'components/title';
import { styles } from './styles';

class login extends Component {
	login() {
		const { username, password } = this.props;
		this.props.handleLogin({ username, password });
	}
	onUsernameChange(text) {
		this.props.onUsernameChange(text);
	}
	onPasswordChange(text) {
		this.props.onPasswordChange(text);
	}
	render() {
		return (
			<View style={styles.main}>
				<Title />
				<KeyboardAvoidingView behavior="padding" style={styles.container}>
					<View style={{ height: 100 }} />
					<LogFormInput
						title="username"
						onInputChange={this.onUsernameChange.bind(this)}
					/>
					<LogFormInput
						title="password"
						onInputChange={this.onPasswordChange.bind(this)}
					/>
					<Btn title="SIGN IN " onPress={this.login.bind(this)} />
				</KeyboardAvoidingView>
			</View>
		);
	}
}
const mapStateToProps = ({ authRed }) => {
	const { username, password } = authRed;
	return { username, password };
};
export default connect(mapStateToProps, {
	handleLogin,
	onPasswordChange,
	onUsernameChange
})(login);
