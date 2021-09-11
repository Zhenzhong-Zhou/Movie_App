import "./home.scss";
import {Featured, Lists, Navbar} from "../../components";

const Home = ({type}) => {
	return (
		<div className={"home"}>
			<Navbar/>
			<Featured type={type}/>
			<Lists/>
			<Lists/>
			<Lists/>
			<Lists/>
		</div>
	);
};

export default Home;