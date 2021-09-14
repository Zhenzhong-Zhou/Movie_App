import {useContext} from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {NavBar, SideBar} from "./components";
import "./App.css";
import {Home, Login, NewProduct, NewUser, Product, ProductList, User, UserList} from "./pages";
import {AuthContext} from "./context/authContext/AuthContext";

const App = () => {
	const {user} = useContext(AuthContext);

	return (
		<BrowserRouter>
			<Switch>
				<Route path={"/login"} component={() => user ? <Redirect to={"/"}/> : <Login/>}/>
				{user &&
				<>
					<NavBar/>
					<div className={"container"}>
						<SideBar/>
						<Route path={"/"} exact component={() => (user ? <Home/> : <Redirect to={"/"}/>)}/>
						<Route exact path={"/users"} component={UserList}/>
						<Route exact path={"/user/:userId"} component={User}/>
						<Route exact path={"/newUser"} component={NewUser}/>
						<Route exact path={"/movies"} component={ProductList}/>
						<Route exact path={"/movie/:movieId"} component={Product}/>
						<Route exact path={"/newMovie"} component={NewProduct}/>
					</div>
				</>
				}
			</Switch>
		</BrowserRouter>
	);
};

export default App;