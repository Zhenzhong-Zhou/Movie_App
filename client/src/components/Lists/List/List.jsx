import {Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined} from "@material-ui/icons";
import "./list.scss";
import cover from "../../../assets/images/user5.png";

const List = () => {
	return (
		<div className={"list"}>
			<img src={cover} alt={"Cover"}/>
			<div className={"listInfo"}>
				<div className={"icons"}>
					<PlayArrow/>
					<Add/>
					<ThumbUpOutlined/>
					<ThumbDownOutlined/>
				</div>
			</div>
		</div>
	);
};

export default List;