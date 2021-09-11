import {useEffect, useState} from "react";
import {Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined} from "@material-ui/icons";
import "./list.scss";
import {axiosInstance} from "../../../api";

const List = ({item, index}) => {
	const [isHovered, setIsHovered] = useState(false);
	const [movie, setMovie] = useState({});

	useEffect(() => {
		const fetchMovie = async () => {
			try {
				const {data} = await axiosInstance.get(`/movies/find/${item}`,
					{headers: {token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxM2IwY2QzNzFmNTRiMTYyMTNiZWU4YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTM1MzU1MywiZXhwIjoxNjMxMzU3MTUzfQ.IfgMagv9Pz0nMSUuF14gSQZ7MDjQmannXT5tF4s-XVg"}});
				setMovie(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchMovie();
	}, [item]);

	return (
		<div className={"list"}
		     style={{left: isHovered && index * 225 - 50 + index * 2.5}}
		     onMouseEnter={() => setIsHovered(true)}
		     onMouseLeave={() => setIsHovered(false)}>
			<img src={movie.image} alt={"Cover"}/>
			{isHovered && (
				<>
					<video src={movie.trailer} autoPlay={true} loop/>
					<div className={"listInfo"}>
						<div className={"icons"}>
							<PlayArrow className={"icon"}/>
							<Add className={"icon"}/>
							<ThumbUpOutlined className={"icon"}/>
							<ThumbDownOutlined className={"icon"}/>
						</div>
						<div className={"listInfoTop"}>
							<span>{movie.duration}</span>
							<span className={"limit"}>+{movie.limit}</span>
							<span>{movie.year}</span>
						</div>
						<div className={"descriptions"}>
							{movie.description}
						</div>
						<div className={"genre"}>{movie.genre}</div>
					</div>
				</>
			)}
		</div>
	);
};

export default List;