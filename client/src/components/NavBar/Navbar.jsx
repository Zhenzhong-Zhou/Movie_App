import {useContext, useState} from "react";
import {ArrowDropDown, Notifications, Search} from "@material-ui/icons";
import {Link} from "react-router-dom";
import "./navbar.scss";
import logo from "../../assets/images/Netflix_2015_logo.png";
import avatar from "../../assets/images/user4.jpeg";
import {AuthContext} from "../../context/authContext/AuthContext";
import {logout} from "../../context/authContext/AuthActions";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const {dispatch} = useContext(AuthContext);
	window.onscroll = () => {
		setIsScrolled(window.pageYOffset !== 0);
		return () => (window.onscroll = null);
	};
	return (
		<div className={isScrolled ? "navbar scrolled": "navbar"}>
			<div className={"container"}>
				<div className={"left"}>
					<img src={logo} alt={"Netflix Logo"}/>
					<Link to={"/"} className={"link"}>
						<span>Homepage</span>
					</Link>
					<Link to={"/series"} className={"link"}>
						<span className={"mainLink"}>Series</span>
					</Link>
					<Link to={"/movies"} className={"link"}>
						<span className={"mainLink"}>Movies</span>
					</Link>
					<span>New and Popular</span>
					<span>My List</span>
				</div>
				<div className={"right"}>
					<Search className={"icon"}/>
					<span>KID</span>
					<Notifications className={"icon"}/>
					<img src={avatar} alt={"Profile Avatar"}/>
					<div className={"profile"}>
						<ArrowDropDown className={"icon"}/>
						<div className={"options"}>
							<span>Settings</span>
							<span onClick={() => dispatch(logout())}>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;