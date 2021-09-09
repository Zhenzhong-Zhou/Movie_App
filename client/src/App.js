import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./app.scss";
import {Home, Watch} from "./pages";

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
			</Switch>
		</BrowserRouter>
	);
};

export default App;