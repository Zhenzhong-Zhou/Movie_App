import "./styles.css";

const NewProduct = () => {
	return (
		<div className={"newProduct"}>
			<h1 className={"newProductTitle"}>New Movie</h1>
			<form className={"newProductForm"}>
				<div className={"newProductItem"}>
					<label>Image</label>
					<input type={"file"} id={"image"}/>
				</div>
				<div className={"newProductItem"}>
					<label>Image Title</label>
					<input type={"file"} id={"imageTitle"}/>
				</div>
				<div className={"newProductItem"}>
					<label>Image Thumbnail</label>
					<input type={"file"} id={"imageSmall"}/>
				</div>
				<div className={"newProductItem"}>
					<label>Movie Title</label>
					<input type={"text"} placeholder={"Movie Title"}/>
				</div>
				<div className={"newProductItem"}>
					<label>Description</label>
					<input type={"text"} placeholder={"Description"}/>
				</div>
				<div className={"newProductItem"}>
					<label>Year</label>
					<input type={"text"} placeholder={"Year"}/>
				</div>
				<div className={"newProductItem"}>
					<label>Genre</label>
					<input type={"text"} placeholder={"Genre"}/>
				</div>
				<div className={"newProductItem"}>
					<label>Duration</label>
					<input type={"text"} placeholder={"Duration"}/>
				</div>
				<div className={"newProductItem"}>
					<label>Limit</label>
					<input type={"text"} placeholder={"Limit"}/>
				</div>
				<div className={"newProductItem"}>
					<label>Is Series?</label>
					<select name={"isSeries"} id={"isSeries"}>
						<option value={"false"}>No</option>
						<option value={"true"}>Yes</option>
					</select>
				</div>
				<div className={"newProductItem"}>
					<label>Trailer</label>
					<input type={"file"} id={"trailer"}/>
				</div>
				<div className={"newProductItem"}>
					<label>Video</label>
					<input type={"file"} id={"video"}/>
				</div>
				<button className={"newProductButton"}>Create</button>
			</form>
		</div>
	);
};

export default NewProduct;