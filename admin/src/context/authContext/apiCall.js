import {loginFailure, loginStart, loginSuccess} from "./AuthActions";
import {axiosInstance} from "../../api";

export const login = async (user, dispatch) => {
	dispatch(loginStart());
	try {
		const response = await axiosInstance.post("auth/login", user);
		dispatch(loginSuccess(response.data));
	} catch (error) {
		dispatch(loginFailure());
	}
};