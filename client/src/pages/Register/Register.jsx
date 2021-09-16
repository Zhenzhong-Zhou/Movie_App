import {useRef, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import "./register.scss";
import logo from "../../assets/images/Netflix_2015_logo.png";
import {axiosInstance} from "../../api";

const Register = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const emailRef = useRef();
	const usernameRef = useRef();
	const passwordRef = useRef();
	const history = useHistory();

	const handleStart = () => {
		setEmail(emailRef.current.value);
	};

	const handleFinish = async (event) => {
		event.preventDefault();
		setPassword(passwordRef.current.value);
		setUsername(usernameRef.current.value);
		try {
			await axiosInstance.post("auth/register", {email, username, password});
			history.push("/login");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={"register"}>
			<div className={"top"}>
				<div className={"wrapper"}>
					<img src={logo} alt={"Logo"} className={"logo"}/>
					<button className={"loginButton"}><Link to={"/login"} className={"link"}>Sign In</Link></button>
				</div>
			</div>
			<div className={"container"}>
				<h1>Unlimited movies, TV shows, and more</h1>
				<h2>Watch anywhere. Cancel anytime.</h2>
				<p>Ready to watch? Enter your email to create or restart your membership.</p>
				{!email ? (
					<div className={"input"}>
						<input type={"email"} placeholder={"Email Address"} ref={emailRef}/>
						<button className={"signup"} onClick={handleStart}>Get Started</button>
					</div>
				) : (
					<form className={"input"}>
						<input type={"username"} placeholder={"Username"} ref={usernameRef}/>
						<input type={"password"} placeholder={"Password"} ref={passwordRef}/>
						<button className={"signup"} onClick={handleFinish}>Register</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default Register;