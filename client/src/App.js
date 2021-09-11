import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import "./app.scss";
import {Home, Login, Register, Watch} from "./pages";

const App = () => {
	const user = true;
	return (
		<BrowserRouter>
			<Switch>
				<Route path={"/"} exact component={() => (user ? <Home/> : <Redirect to={"/register"}/>)}/>
				<Route path={"/register"} exact component={() => (!user ? <Register/> : <Redirect to={"/"}/>)}/>
				<Route path={"/login"} exact component={() => (!user ? <Login/> : <Redirect to={"/"}/>)}/>
				{user && (
					<>
						<Route path={"/movies"} exact component={() => <Home type={"movies"}/>}/>
						<Route path={"/series"} exact component={() => <Home type={"series"}/>}/>
						<Route path={"/watch"} exact component={() => <Watch/>}/>
					</>
				)}
			</Switch>
		</BrowserRouter>
	);
};

export default App;