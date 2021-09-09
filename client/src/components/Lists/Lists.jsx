import "./list.scss";
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@material-ui/icons";
import List from "./List/List";

const Lists = () => {
	return (
		<div className={"lists"}>
			<span className={"listsTitle"}>Continue to watch</span>
			<div className={"wrapper"}>
				<ArrowBackIosOutlined/>
				<div className={"container"}>
					<List/>
				</div>
				<ArrowForwardIosOutlined/>
			</div>
		</div>
	);
};

export default Lists;