import {
	deleteMovieFailure,
	deleteMovieStart,
	deleteMovieSuccess,
	fetchMovieFailure,
	fetchMovieStart,
	fetchMovieSuccess
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