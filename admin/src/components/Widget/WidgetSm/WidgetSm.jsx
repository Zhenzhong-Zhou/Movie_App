import {useEffect, useState} from "react";
import {Visibility} from "@material-ui/icons";
import "./styles.css";
import avatar from "../../../assets/images/avatar.png";
import {axiosInstance} from "../../../api";

const WidgetSm = () => {
	const [newUsers, setNewUsers] = useState([]);

	useEffect(() => {
		const fetchNewUsers = async () => {
			try {
				const {data} = await axiosInstance.get("users?new=true",
					{headers: {token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken}});
				setNewUsers(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchNewUsers();
	}, []);

	return (
		<div className={"WidgetSm"}>
			<span className={"WidgetSmTitle"}>New Join Members</span>
			<ul className={"WidgetSmList"}>
				{newUsers.map((newUser) => (
					<li className={"WidgetSmListItem"} key={newUser._id}>
						<img src={newUser.profile || avatar} alt={"Avatar"} className={"WidgetSmImg"}/>
						<div className={"WidgetSmUser"}>
							<span className={"WidgetSmUsername"}>{newUser.username}</span>
						</div>
						<button className={"WidgetSmButton"}><Visibility className={"WidgetSmIcon"}/>Display</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default WidgetSm;