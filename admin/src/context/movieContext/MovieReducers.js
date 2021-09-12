import {DELETE_MOVIE_FAILURE, DELETE_MOVIE_START, DELETE_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE, FETCH_MOVIE_START, FETCH_MOVIE_SUCCESS} from "../../constants/actionTypes";

const MovieReducers = (states, actions) => {
	switch (actions.type) {
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