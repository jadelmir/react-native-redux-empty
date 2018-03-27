import axios from 'axios';

export const handleLogin = () => {
	console.log('we are in the actions');
	return { type: 'LOGIN' };
};

export const onUsernameChange = payload => {
	console.log('we are here username');

	return {
		type: 'USERNAME_CHANGE',
		payload: payload
	};
};
export const onPasswordChange = payload => {
	console.log('we are here password');
	return {
		type: 'PASSWORD_CHANGE',
		payload: payload
	};
};
