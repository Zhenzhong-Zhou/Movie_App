import {createContext, useReducer} from "react";
import ListReducers from "./ListReducers";

const INITIAL_STATE = {
	lists: [],
	isFetching: false,
	error: false
};

export const ListContext = createContext(INITIAL_STATE);

export const ListContextProvider = ({children}) => {
	const [state, dispatch] = useReducer(ListReducers, INITIAL_STATE);

	return (
		<ListContext.Provider value={{lists: state.lists, isFetching: state.isFetching, error: state.error, dispatch}}>
			{children}
		</ListContext.Provider>
	);
};