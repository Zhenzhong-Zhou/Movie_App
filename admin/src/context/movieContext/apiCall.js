import {fetchMovieFailure, fetchMovieStart, fetchMovieSuccess} from "./MovieActions";
import {axiosInstance} from "../../api";

export const fetchMovie = async (dispatch) => {
	dispatch(fetchMovieStart())
	try {
		const {data} = await axiosInstance.get("/movies",
			{headers: {token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken}});
		dispatch(fetchMovieSuccess());
	} catch (error) {
		dispatch(fetchMovieFailure());
	}
};