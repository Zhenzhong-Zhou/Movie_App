import {fetchMovieFailure, fetchMovieStart, fetchMovieSuccess} from "./MovieActions";
import {axiosInstance} from "../../api";

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