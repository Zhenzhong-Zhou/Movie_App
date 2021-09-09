import "./home.scss";
import {Featured, Navbar} from "../../components";

const Home = () => {
	return (
		<div className={"home"}>
			<Navbar/>
			<Featured/>
		</div>
	);
};

export default Home;