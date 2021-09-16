import {useContext, useEffect, useState} from "react";
import "./newlist.css";
import {MovieContext} from "../../context/movieContext/MovieContext";
import {ListContext} from "../../context/listContext/ListContext";
import {fetchMovies} from "../../context/movieContext/apiCall";

const NewProduct = () => {
	const [list, setList] = useState(null);

	const {dispatch} = useContext(ListContext);
	const {movies, dispatch: dispatchMovie} = useContext(MovieContext);

	useEffect(() => {
		fetchMovies(dispatchMovie);
	}, [dispatchMovie]);

	const handleChange = (event) => {
		const value = event.target.value;
		setList({...list, [event.target.name]: value});
	};

	const handleSelect = (event) => {
		let value = Array.from(event.target.selectedOptions, (option) => option.value);
		setList({...list, [event.target.name]: value});
	};

	console.log(list)

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className={"newProduct"}>
			<h1 className={"newProductTitle"}>New Movie</h1>
			<form className={"newProductForm"}>
				<div className={"formLeft"}>
					<div className={"newProductItem"}>
						<label>List Title</label>
						<input type={"text"} placeholder={"Movie Title"} name={"title"} onChange={handleChange}/>
					</div>
					<div className={"newProductItem"}>
						<label>Genre</label>
						<input type={"text"} placeholder={"Genre"} name={"genre"} onChange={handleChange}/>
					</div>
					<div className={"newProductItem"}>
						<label>Type</label>
						<select name={"type"} id={"type"} onChange={handleChange}>
							<option>Type</option>
							<option value={"movie"}>Movie</option>
							<option value={"series"}>Series</option>
						</select>
					</div>
				</div>
				<div className={"formRight"}>
					<div className={"newProductItem"}>
						<label>Content</label>
						<select multiple name={"content"} id={"content"} onChange={handleSelect} style={{height: "280px"}}>
							{movies.map((movie) => (
								<option key={movie._id} value={movie._id}>{movie.title}</option>
							))}
						</select>
					</div>
				</div>
				<button className={"newProductButton"} onClick={handleSubmit}>Create</button>
			</form>
		</div>
	);
};

export default NewProduct;