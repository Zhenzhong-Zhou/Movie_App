import {loginFailure, loginStart, loginSuccess} from "./AuthActions";
import {axiosInstance} from "../../api";

export const login = async (user, dispatch) => {
	dispatch(loginStart());
	try {
		const {data} = await axiosInstance.post("auth/login", user);
		data.isAdmin && dispatch(loginSuccess(data));
	} catch (error) {
		dispatch(loginFailure());
	}
};