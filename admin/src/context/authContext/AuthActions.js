import {LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS} from "../../constants/actionTypes";

export const loginStart = () => ({
	type: LOGIN_START
});

export const loginSuccess = (user) => ({
	type: LOGIN_SUCCESS, payload: user
});

export const loginFailure = () => ({
	type: LOGIN_FAILURE
});