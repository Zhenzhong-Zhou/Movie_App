import {BrowserRouter, Route, Switch} from "react-router-dom";
import {NavBar, SideBar} from "./components";
import "./App.css";
import {Home, NewProduct, NewUser, Product, ProductList, User, UserList} from "./pages";

const App = () => {
	return (
		<BrowserRouter>
			<NavBar/>
			<div className={"container"}>
				<SideBar/>
				<Switch>
					<Route exact path={"/"}>
						<Home/>
					</Route>
					<Route exact path={"/users"}>
						<UserList/>
					</Route>
					<Route exact path={"/user/:userId"}>
						<User/>
					</Route>
					<Route exact path={"/newUser"}>
						<NewUser/>
					</Route>
					<Route exact path={"/movies"}>
						<ProductList/>
					</Route>
					<Route exact path={"/movie/:movieId"}>
						<Product/>
					</Route>
					<Route exact path={"/newMovie"}>
						<NewProduct/>
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;