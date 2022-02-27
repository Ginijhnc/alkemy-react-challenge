import { types } from '../types/types';

const storedToken = localStorage.getItem('token') || '';

export const userReducer = (token = storedToken, action) => {
	switch (action.type) {
		case types.signin:
			localStorage.setItem('token', action.payload);
			return action.payload;

		case types.signout:
			localStorage.removeItem('token');
			return '';

		default:
			return token;
	}
};
