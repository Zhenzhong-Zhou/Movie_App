import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import "./login.scss";
import logo from "../../assets/images/Netflix_2015_logo.png";
import {login} from "../../context/authContext/apiCall";
import {AuthContext} from "../../context/authContext/AuthContext";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const {dispatch} = useContext(AuthContext);

	const handleLogin = (event) => {
		event.preventDefault();
		login({email, password}, dispatch);
	};

	return (
		<div className={"login"}>
			<div className={"top"}>
				<div className={"wrapper"}>
					<img src={logo} alt={"Logo"} className={"logo"}/>
				</div>
			</div>
			<div className={"container"}>
				<form>
					<h1>Sign In</h1>
					<input type={"email"} placeholder={"Email or Phone Number"} onChange={event => setEmail(event.target.value)}/>
					<input type={"password"} placeholder={"Password"} onChange={event => setPassword(event.target.value)}/>
					<button className={"loginButton"} onClick={handleLogin}>Sign In</button>
					<span>New to Netflix? <b><Link to={"/register"} className={"link"}>Sign up now.</Link></b></span>
					<small>
						This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>.
					</small>
				</form>
			</div>
		</div>
	);
};

export default Login;