import "./home.scss";
import {Featured, Lists, Navbar} from "../../components";

const Home = () => {
	return (
		<div className={"home"}>
			<Navbar/>
			<Featured/>
			<Lists/>
			<Lists/>
			<Lists/>
			<Lists/>
		</div>
	);
};

export default Home;