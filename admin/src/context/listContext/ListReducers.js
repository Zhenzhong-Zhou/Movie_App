import {
	CREATE_LIST_FAILURE,
	CREATE_LIST_START,
	CREATE_LIST_SUCCESS, DELETE_LIST_FAILURE, DELETE_LIST_START, DELETE_LIST_SUCCESS,
	FETCH_LIST_FAILURE,
	FETCH_LIST_START,
	FETCH_LIST_SUCCESS, UPDATE_LIST_FAILURE, UPDATE_LIST_START, UPDATE_LIST_SUCCESS
} from "../../constants/actionTypes";

const ListReducers = (states, actions) => {
	switch (actions.type) {
		// Fetch
		case FETCH_LIST_START:
			return {
				lists: [],
				isFetching: true,
				error: false
			};
		case FETCH_LIST_SUCCESS:
			return {
				lists: actions.payload,
				isFetching: false,
				error: false
			};
		case FETCH_LIST_FAILURE:
			return {
				lists: [],
				isFetching: false,
				error: true
			};
		// Create
		// case CREATE_LIST_START:
		// 	return {
		// 		...states,
		// 		isFetching: true,
		// 		error: false
		// 	};
		// case CREATE_LIST_SUCCESS:
		// 	return {
		// 		lists: [...states.lists, actions.payload],
		// 		isFetching: false,
		// 		error: false
		// 	};
		// case CREATE_LIST_FAILURE:
		// 	return {
		// 		...states,
		// 		isFetching: false,
		// 		error: true
		// 	};
		// Update
		// case UPDATE_LIST_START:
		// 	return {
		// 		...states,
		// 		isFetching: true,
		// 		error: false
		// 	};
		// case UPDATE_LIST_SUCCESS:
		// 	return {
		// 		lists: states.lists.map(movie =>  movie._id === actions.payload._id && actions.payload),
		// 		isFetching: false,
		// 		error: false
		// 	};
		// case UPDATE_LIST_FAILURE:
		// 	return {
		// 		...states,
		// 		isFetching: false,
		// 		error: true
		// 	};
		// Delete
		case DELETE_LIST_START:
			return {
				...states,
				isFetching: true,
				error: false
			};
		case DELETE_LIST_SUCCESS:
			return {
				lists: states.lists.filter((list) => list._id !== actions.payload),
				isFetching: false,
				error: false
			};
		case DELETE_LIST_FAILURE:
			return {
				...states,
				isFetching: false,
				error: true
			};
		default:
			return {...states}
	}
};

export default ListReducers;