import {LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGOUT} from "../../constants/actionTypes";

// LOGIN
export const loginStart = () => ({
	type: LOGIN_START
});

export const loginSuccess = (user) => ({
	type: LOGIN_SUCCESS, payload: user
});

export const loginFailure = () => ({
	type: LOGIN_FAILURE
});
// LOGOUT
export const logout = () => ({
	type: LOGOUT
});