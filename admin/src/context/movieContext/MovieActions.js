import {CREATE_MOVIE_FAILURE, CREATE_MOVIE_START, CREATE_MOVIE_SUCCESS, DELETE_MOVIE_FAILURE, DELETE_MOVIE_START, DELETE_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE, FETCH_MOVIE_START, FETCH_MOVIE_SUCCESS} from "../../constants/actionTypes";

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
// CREATE
export const createMovieStart = () => ({
	type: CREATE_MOVIE_START
});

export const createMovieSuccess = (movie) => ({
	type: CREATE_MOVIE_SUCCESS,
	payload: movie
});

export const createMovieFailure = () => ({
	type: CREATE_MOVIE_FAILURE
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