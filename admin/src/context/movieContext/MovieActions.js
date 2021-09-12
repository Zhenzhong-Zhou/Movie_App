import {DELETE_MOVIE_FAILURE, DELETE_MOVIE_START, DELETE_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE, FETCH_MOVIE_START, FETCH_MOVIE_SUCCESS} from "../../constants/actionTypes";

// FETCH
export const fetchMovieStart = () => ({
	type: FETCH_MOVIE_START
});

export const fetchMovieSuccess = (movies) => ({
	type: FETCH_MOVIE_SUCCESS,
	payload: movies
});

export const fetchMovieFailure = () => ({
	type: FETCH_MOVIE_FAILURE
});
// DELETE
export const deleteMovieStart = () => ({
	type: DELETE_MOVIE_START
});

export const deleteMovieSuccess = (id) => ({
	type: DELETE_MOVIE_SUCCESS,
	payload: id
});

export const deleteMovieFailure = () => ({
	type: DELETE_MOVIE_FAILURE
});