import {Link, useLocation} from "react-router-dom";
import {ArrowBackOutlined} from "@material-ui/icons";
import "./watch.scss";

const Watch = () => {
	const {movie} = useLocation();

	return (
		<div className={"watch"}>
			<div className={"back"}>
				<Link to={"/"} className={"link"}>
					<ArrowBackOutlined className={"icon"}/>
				</Link>
				Home
			</div>
			<video className={"video"} autoPlay onProgress controls src={movie.video}/>
		</div>
	);
};

export default Watch;