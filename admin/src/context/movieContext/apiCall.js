import {
	createMovieFailure,
	createMovieStart,
	createMovieSuccess,
	deleteMovieFailure,
	deleteMovieStart,
	deleteMovieSuccess,
	fetchMovieFailure,
	fetchMovieStart,
	fetchMovieSuccess, updateMovieFailure,
	updateMovieStart, updateMovieSuccess
} from "./MovieActions";
import {axiosInstance} from "../../api";

// FETCH
export const fetchMovies = async (dispatch) => {
	dispatch(fetchMovieStart())
	try {
		const {data} = await axiosInstance.get("/movies",
			{headers: {token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken}});
		dispatch(fetchMovieSuccess(data));
	} catch (error) {
		dispatch(fetchMovieFailure());
	}
};
// CREATE
export const createMovie = async (movie, dispatch) => {
	dispatch(createMovieStart())
	try {
		const {data} = await axiosInstance.post("movies",  movie,
			{headers: {token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken}});
		dispatch(createMovieSuccess(data));
	} catch (error) {
		dispatch(createMovieFailure());
	}
};
// UPDATE
export const updateMovie = async (id, dispatch) => {
	dispatch(updateMovieStart())
	try {
		const {data} = await axiosInstance.put(`movies/${id}`,
			{headers: {token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken}});
		dispatch(updateMovieSuccess(data));
	} catch (error) {
		dispatch(updateMovieFailure());
	}
};
// DELETE
export const deleteMovies = async (id, dispatch) => {
	dispatch(deleteMovieStart())
	try {
		await axiosInstance.delete(`movies/${id}`,
			{headers: {token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken}});
		dispatch(deleteMovieSuccess(id));
	} catch (error) {
		dispatch(deleteMovieFailure());
	}
};