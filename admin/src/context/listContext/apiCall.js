import {
	createListFailure,
	createListStart,
	createListSuccess, deleteListFailure, deleteListStart, deleteListSuccess,
	fetchListFailure,
	fetchListStart,
	fetchListSuccess, updateListFailure, updateListStart, updateListSuccess
} from "./ListActions";
import {axiosInstance} from "../../api";

// FETCH
export const fetchLists = async (dispatch) => {
	dispatch(fetchListStart())
	try {
		const {data} = await axiosInstance.get("/lists",
			{headers: {token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken}});
		dispatch(fetchListSuccess(data));
	} catch (error) {
		dispatch(fetchListFailure());
	}
};
// CREATE
export const createLists = async (list, dispatch) => {
	dispatch(createListStart())
	try {
		const {data} = await axiosInstance.post("lists",  list,
			{headers: {token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken}});
		dispatch(createListSuccess(data));
	} catch (error) {
		dispatch(createListFailure());
	}
};
// UPDATE
export const updateLists = async (id, dispatch) => {
	dispatch(updateListStart())
	try {
		const {data} = await axiosInstance.put(`lists/${id}`,
			{headers: {token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken}});
		dispatch(updateListSuccess(data));
	} catch (error) {
		dispatch(updateListFailure());
	}
};
// DELETE
export const deleteLists = async (id, dispatch) => {
	dispatch(deleteListStart())
	try {
		await axiosInstance.delete(`lists/${id}`,
			{headers: {token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken}});
		dispatch(deleteListSuccess(id));
	} catch (error) {
		dispatch(deleteListFailure());
	}
};