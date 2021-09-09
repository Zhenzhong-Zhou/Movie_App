import {useState} from "react";
import {ArrowDropDown, Notifications, Search} from "@material-ui/icons";
import "./navbar.scss";
import logo from "../../assets/images/Netflix_2015_logo.png";
import avatar from "../../assets/images/user4.jpeg";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	window.onscroll = () => {
		setIsScrolled(window.pageYOffset !== 0);
		return () => (window.onscroll = null);
	};
	return (
		<div className={isScrolled ? "navbar scrolled": "navbar"}>
			<div className={"container"}>
				<div className={"left"}>
					<img src={logo} alt={"Netflix Logo"}/>
					<span>Homepage</span>
					<span>Series</span>
					<span>Movies</span>
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
							<span>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;