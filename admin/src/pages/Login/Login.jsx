import {useContext, useState} from "react";
import "./login.css";
import {AuthContext} from "../../context/authContext/AuthContext";
import {login} from "../../context/authContext/apiCall";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const {isFetching, dispatch} = useContext(AuthContext);

	const handleClick = (event) => {
		event.preventDefault();
		login({email, password}, dispatch);
	};

	return (
		<div className={"login"}>
			<form className={"loginForm"}>
				<input type={"text"} placeholder={"Email"} className={"loginInput"} onChange={(event) => setEmail(event.target.value)}/>
				<input type={"password"} placeholder={"Password"} className={"loginInput"} onChange={(event) => setPassword(event.target.value)}/>
				<button className={"loginButton"} onClick={handleClick} disabled={isFetching}>Login</button>
			</form>
		</div>
	);
};

export default Login;