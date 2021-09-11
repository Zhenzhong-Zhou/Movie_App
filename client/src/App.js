import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./app.scss";
import {Home, Login, Register, Watch} from "./pages";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={"/"} exact component={() => <Home/>}/>
				<Route path={"/movies"} exact component={() => <Home type={"movies"}/>}/>
				<Route path={"/series"} exact component={() => <Home type={"series"}/>}/>
				<Route path={"/watch"} exact component={() => <Watch/>}/>
				<Route path={"/register"} exact component={() => <Register/>}/>
				<Route path={"/login"} exact component={() => <Login/>}/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;