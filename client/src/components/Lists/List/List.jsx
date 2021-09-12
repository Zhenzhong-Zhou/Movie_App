import {useEffect, useState} from "react";
import {Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined} from "@material-ui/icons";
import {Link} from "react-router-dom";
import "./list.scss";
import {axiosInstance} from "../../../api";

const List = ({item, index}) => {
	const [isHovered, setIsHovered] = useState(false);
	const [movie, setMovie] = useState({});

	useEffect(() => {
		const fetchMovie = async () => {
			try {
				const {data} = await axiosInstance.get(`/movies/find/${item}`);
				setMovie(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchMovie();
	}, [item]);

	return (
		<Link to={{pathname: "/watch", movie}}>
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
		</Link>
	);
};

export default List;