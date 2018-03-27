const INITIAL_STATE = {
	username: '',
	password: ''
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'USERNAME_CHANGE':
			return { ...state, username: action.payload };
			break;
		case 'PASSWORD_CHANGE':
			return { ...state, password: action.payload };
			break;
		default:
			return state;
	}
};
