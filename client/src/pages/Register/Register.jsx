import {useRef, useState} from "react";
import "./register.scss";
import logo from "../../assets/images/Netflix_2015_logo.png";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const emailRef = useRef();
	const passwordRef = useRef();

	const handleStart = () => {
		setEmail(emailRef.current.value);
	};

	const handleFinish = () => {
		setPassword(password.current.value);
	};

	return (
		<div className={"register"}>
			<div className={"top"}>
				<div className={"wrapper"}>
					<img src={logo} alt={"Logo"} className={"logo"}/>
					<button className={"login"}>Sign In</button>
				</div>
			</div>
			<div className={"container"}>
				<h1>Unlimited movies, TV shows, and more</h1>
				<h2>Watch anywhere. Cancel anytime.</h2>
				<p>Ready to watch? Enter your email to create or restart your membership.</p>
				{!email ? (
					<div className={"input"}>
						<input type={"email"} placeholder={"Email Address"} ref={emailRef}/>'
						<button className={"signup"} onClick={handleStart}>Get Started</button>
					</div>
				) : (
					<form className={"input"}>
						<input type={"password"} placeholder={"Password"} ref={passwordRef}/>'
						<button className={"signup"} onClick={handleFinish}>Register</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default Register;