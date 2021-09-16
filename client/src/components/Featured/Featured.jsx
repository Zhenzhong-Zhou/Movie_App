import {useEffect, useState} from "react";
import {InfoOutlined, PlayArrow} from "@material-ui/icons";
import "./featured.scss";
import {axiosInstance} from "../../api";

const Featured = ({type, setGenre}) => {
	const [content, setContent] = useState({});
console.log("content: ", content.image)
	useEffect(() => {
		const fetchRandomContent = async () => {
			try {
				const {data} = await axiosInstance.get(`/movies/random?type=${type}`,
					{headers: {token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken}});
				setContent(data[0]);
			} catch (error) {
				console.log(error);
			}
		};
		fetchRandomContent();
	}, [type]);

	return (
		<div className={"featured"}>
			{type && (
				<div className={"category"}>
					<span>{type === "movies" ? "Movies" : "TV Series"}</span>
					<select name={"genre"} id={"genre"} onChange={event => setGenre(event.target.value)}>
						<option>Genre</option>
						<option value="adventure">Adventure</option>
						<option value="comedy">Comedy</option>
						<option value="crime">Crime</option>
						<option value="fantasy">Fantasy</option>
						<option value="historical">Historical</option>
						<option value="horror">Horror</option>
						<option value="romance">Romance</option>
						<option value="sci-fi">Sci-fi</option>
						<option value="thriller">Thriller</option>
						<option value="western">Western</option>
						<option value="animation">Animation</option>
						<option value="drama">Drama</option>
						<option value="documentary">Documentary</option>
					</select>
				</div>
			)}
			<img width={"100%"} src={content.image} alt={"Cover"}/>
			<div className={"info"}>
				<img width={"100%"} src={content.imageTitle} alt={"Title"}/>
				<span className={"descriptions"}>
					{content.description}
				</span>
				<div className={"buttons"}>
					<button className={"play"}>
						<PlayArrow/>
						<span>Play</span>
					</button>
					<button className={"more"}>
						<InfoOutlined/>
						<span>Info</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;