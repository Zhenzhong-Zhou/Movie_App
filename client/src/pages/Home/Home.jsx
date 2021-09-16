import {useEffect, useState} from "react";
import "./home.scss";
import {Featured, Lists, Navbar} from "../../components";
import {axiosInstance} from "../../api";

const Home = ({type}) => {
	const [lists, setLists] = useState([]);
	const [genre, setGenre] = useState(null);

	useEffect(() => {
		const fetchRandomLists = async () => {
			try {
				const {data} = await axiosInstance.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
					{headers: {token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken}});
				setLists(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchRandomLists();
	}, [type, genre]);

	return (
		<div className={"home"}>
			<Navbar/>
			<Featured type={type} setGenre={setGenre}/>
			{lists.map((list) => (
				<Lists list={list} key={list._id}/>
			))}
		</div>
	);
};

export default Home;