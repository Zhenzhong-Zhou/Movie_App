import {
	CREATE_LIST_FAILURE,
	CREATE_LIST_START,
	CREATE_LIST_SUCCESS, DELETE_LIST_FAILURE, DELETE_LIST_START, DELETE_LIST_SUCCESS,
	FETCH_LIST_FAILURE,
	FETCH_LIST_START,
	FETCH_LIST_SUCCESS, UPDATE_LIST_FAILURE, UPDATE_LIST_START, UPDATE_LIST_SUCCESS
} from "../../constants/actionTypes";

// FETCH
export const fetchListStart = () => ({
	type: FETCH_LIST_START
});

export const fetchListSuccess = (lists) => ({
	type: FETCH_LIST_SUCCESS,
	payload: lists
});

export const fetchListFailure = () => ({
	type: FETCH_LIST_FAILURE
});
// CREATE
export const createListStart = () => ({
	type: CREATE_LIST_START
});

export const createListSuccess = (list) => ({
	type: CREATE_LIST_SUCCESS,
	payload: list
});

export const createListFailure = () => ({
	type: CREATE_LIST_FAILURE
});
// UPDATE
export const updateListStart = () => ({
	type: UPDATE_LIST_START
});

export const updateListSuccess = (list) => ({
	type: UPDATE_LIST_SUCCESS,
	payload: list
});

export const updateListFailure = () => ({
	type: UPDATE_LIST_FAILURE
});
// DELETE
export const deleteListStart = () => ({
	type: DELETE_LIST_START
});

export const deleteListSuccess = (id) => ({
	type: DELETE_LIST_SUCCESS,
	payload: id
});

export const deleteListFailure = () => ({
	type: DELETE_LIST_FAILURE
});