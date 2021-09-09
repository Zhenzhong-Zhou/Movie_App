import {useState} from "react";
import {Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined} from "@material-ui/icons";
import "./list.scss";
import cover from "../../../assets/images/user5.png";

const List = ({index}) => {
	const [isHovered, setIsHovered] = useState(false);
	const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
	return (
		<div className={"list"}
		     style={{left: isHovered && index * 225 - 50 + index * 2.5}}
		     onMouseEnter={() => setIsHovered(true)}
		     onMouseLeave={() => setIsHovered(false)}>
			<img src={cover} alt={"Cover"}/>
			{isHovered && (
				<>
					<video src={trailer} autoPlay={true} loop/>
					<div className={"listInfo"}>
						<div className={"icons"}>
							<PlayArrow className={"icon"}/>
							<Add className={"icon"}/>
							<ThumbUpOutlined className={"icon"}/>
							<ThumbDownOutlined className={"icon"}/>
						</div>
						<div className={"listInfoTop"}>
							<span>1 hour 14 mins</span>
							<span className={"limit"}>+16</span>
							<span>2001</span>
						</div>
						<div className={"descriptions"}>
							Set in China towards the end of the Yuan dynasty, the story revolves around a pair of allegedly
							unrivalled weapons, the Heaven-Reliant Sword
						</div>
						<div className={"genre"}>Action</div>
					</div>
				</>
			)}
		</div>
	);
};

export default List;