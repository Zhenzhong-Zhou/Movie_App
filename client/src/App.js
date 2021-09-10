import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./app.scss";
import {Home, Register, Watch} from "./pages";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={"/"}>
					<Home/>
				</Route>
				<Route exact path={"/watch"}>
					<Watch/>
				</Route>
				<Route exact path={"/register"}>
					<Register/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;