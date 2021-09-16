import {
	CREATE_MOVIE_FAILURE,
	CREATE_MOVIE_START, CREATE_MOVIE_SUCCESS,
	DELETE_MOVIE_FAILURE,
	DELETE_MOVIE_START,
	DELETE_MOVIE_SUCCESS,
	FETCH_MOVIE_FAILURE,
	FETCH_MOVIE_START,
	FETCH_MOVIE_SUCCESS, UPDATE_MOVIE_FAILURE, UPDATE_MOVIE_START, UPDATE_MOVIE_SUCCESS
} from "../../constants/actionTypes";
import movie from "../../../../server/models/movie";

const MovieReducers = (states, actions) => {
	switch (actions.type) {
		// Fetch
		case FETCH_MOVIE_START:
			return {
				movies: [],
				isFetching: true,
				error: false
			};
		case FETCH_MOVIE_SUCCESS:
			return {
				movies: actions.payload,
				isFetching: false,
				error: false
			};
		case FETCH_MOVIE_FAILURE:
			return {
				movies: [],
				isFetching: false,
				error: true
			};
		// Create
		case CREATE_MOVIE_START:
			return {
				...states,
				isFetching: true,
				error: false
			};
		case CREATE_MOVIE_SUCCESS:
			return {
				movies: [...states.movies, actions.payload],
				isFetching: false,
				error: false
			};
		case CREATE_MOVIE_FAILURE:
			return {
				...states,
				isFetching: false,
				error: true
			};
		// Update
		case UPDATE_MOVIE_START:
			return {
				...states,
				isFetching: true,
				error: false
			};
		case UPDATE_MOVIE_SUCCESS:
			return {
				movies: states.movies.map(movie =>  movie._id === actions.payload._id && actions.payload),
				isFetching: false,
				error: false
			};
		case UPDATE_MOVIE_FAILURE:
			return {
				...states,
				isFetching: false,
				error: true
			};
		// Delete
		case DELETE_MOVIE_START:
			return {
				...states,
				isFetching: true,
				error: false
			};
		case DELETE_MOVIE_SUCCESS:
			return {
				movies: states.movies.filter((movie) => movie._id !== actions.payload),
				isFetching: false,
				error: false
			};
		case DELETE_MOVIE_FAILURE:
			return {
				...states,
				isFetching: false,
				error: true
			};
		default:
			return {...states}
	}
};

export default MovieReducers;