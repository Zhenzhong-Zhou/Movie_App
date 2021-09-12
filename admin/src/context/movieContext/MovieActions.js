import {FETCH_MOVIE_FAILURE, FETCH_MOVIE_START, FETCH_MOVIE_SUCCESS} from "../../constants/actionTypes";

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