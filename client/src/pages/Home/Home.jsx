import "./home.scss";
import {Navbar} from "../../components";
import avatar from "../../assets/images/user1.jpeg";

const Home = () => {
	return (
		<div className={"home"}>
			<img width={"100%"} src={avatar} alt={"Cover"}/>
			<Navbar/>
		</div>
	);
};

export default Home;