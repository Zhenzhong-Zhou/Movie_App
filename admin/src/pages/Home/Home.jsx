import {useEffect, useMemo, useState} from "react";
import "./styles.css";
import {Chart, FeaturedInfo, WidgetLg, WidgetSm} from "../../components";
import {axiosInstance} from "../../api";

const Home = () => {
	const months = useMemo(() => [
		"January", "February", "March",
		"April", "May", "June", "July",
		"August", "September", "October",
		"November", "December"
	], []);
	const [userStatus, setUserStatus] = useState([]);

	useEffect(() => {
		const fetchStatus = async () => {
			try {
				const {data} = await axiosInstance.get("users/status",
					{headers: {token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxM2IwY2QzNzFmNTRiMTYyMTNiZWU4YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTQyMzk1NSwiZXhwIjoxNjMxNDI3NTU1fQ.sfp7bX-FSMDOKTQZzEwlHzPaETWb1dDCbhbdzMAFgRo"}});
				const statusList = data.sort((a, b) => {return a._id - b._id});
				statusList.map((item) => setUserStatus(prev => [
					...prev,
					{month: months[item._id - 1], "Total New User": item.total}
				])
				);
			} catch (error) {
				console.log(error);
			}
		};
		fetchStatus()
	}, [months]);

	return (
		<div className={"home"}>
			<FeaturedInfo/>
			<Chart data={userStatus} title={"User Analytics"} grid dataKey={"Total New User"}/>
			<div className={"homeWidgets"}>
				<WidgetSm/>
				<WidgetLg/>
			</div>
		</div>
	);
};

export default Home;