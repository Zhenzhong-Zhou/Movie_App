import {BarChart, List, PermIdentity, PlayCircleOutline} from "@material-ui/icons";
import "./styles.css";
import {Link} from "react-router-dom";

const Quick = () => {
	return (
		<div className={"sidebarMenu"}>
		<h3 className={"sidebarTitle"}>Quick Menu</h3>
			<ul className={"sidebarList"}>
				<Link to={"/users"} className={"link"}>
					<li className={"sidebarListItem"}><PermIdentity className={"sidebarIcon"}/>Users</li>
				</Link>
				<Link to={"/movies"} className={"link"}>
					<li className={"sidebarListItem"}><PlayCircleOutline className={"sidebarIcon"}/>Movies</li>
				</Link>
				<Link to={"/lists"} className={"link"}>
					<li className={"sidebarListItem"}><List className={"sidebarIcon"}/>Lists</li>
				</Link>
				<Link to={"/reports"} className={"link"}>
					<li className={"sidebarListItem"}><BarChart className={"sidebarIcon"}/>Reports</li>
				</Link>
			</ul>
		</div>
	);
};

export default Quick;