import {LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGOUT} from "../../constants/actionTypes";

const AuthReducers = (states, actions) => {
	switch (actions.type) {
		case LOGIN_START:
			return {
				user: null,
				isFetching: true,
				error: false
			};
		case LOGIN_SUCCESS:
			return {
				user: actions.payload,
				isFetching: false,
				error: false
			};
		case LOGIN_FAILURE:
			return {
				user: null,
				isFetching: false,
				error: true
			};
		case LOGOUT:
			return {
				user: null,
				isFetching: false,
				error: false
			};
		default:
			return {...states}
	}
};

export default AuthReducers;