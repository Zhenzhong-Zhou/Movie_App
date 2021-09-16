import {useContext, useState} from "react";
import "./newlist.css";
import storage from "../../config/firebase";
import {createMovie} from "../../context/movieContext/apiCall";
import {MovieContext} from "../../context/movieContext/MovieContext";

const NewProduct = () => {
	const [movie, setMovie] = useState(null);
	const [image, setImage] = useState(null);
	const [imageTitle, setImageTitle] = useState(null);
	const [imageSmall, setImageSmall] = useState(null);
	const [trailer, setTrailer] = useState(null);
	const [video, setVideo] = useState(null);
	const [uploaded, setUploaded] = useState(0);
	const {dispatch} = useContext(MovieContext);

	const handleChange = (event) => {
		const value = event.target.value;
		setMovie({...movie, [event.target.name]: value});
	};

	const upload = (items) => {
		items.forEach(item => {
			const fileName = new Date().getTime() + item.label + item.file.name;
			const uploadTask = storage.ref(`/media/${fileName}`).put(item.file);
			uploadTask.on("state_changed", snapshot => {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log("Upload is " + progress + " % done.");
			}, error => {console.log(error)}, () => {uploadTask.snapshot.ref.getDownloadURL().then(url => {
				setMovie(prev => {return {...prev, [item.label]: url}});
			})});
			setUploaded(prev => prev + 1);
		});
	};

	const handleUpload = (event) => {
		event.preventDefault();
		upload([
			{file: image, label: "image"},
			{file: imageTitle, label: "imageTitle"},
			{file: imageSmall, label: "imageSmall"},
			{file: trailer, label: "trailer"},
			{file: video, label: "video"}
		]);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		createMovie(movie, dispatch);
	};

	return (
		<div className={"newProduct"}>
			<h1 className={"newProductTitle"}>New Movie</h1>
			<form className={"newProductForm"}>
				<div className={"newProductItem"}>
					<label>Image</label>
					<input type={"file"} id={"image"} name={"image"} onChange={event => setImage(event.target.files[0])}/>
				</div>
				<div className={"newProductItem"}>
					<label>Image Title</label>
					<input type={"file"} id={"imageTitle"} name={"imageTitle"} onChange={event => setImageTitle(event.target.files[0])}/>
				</div>
				<div className={"newProductItem"}>
					<label>Image Thumbnail</label>
					<input type={"file"} id={"imageSmall"} name={"imageSmall"} onChange={event => setImageSmall(event.target.files[0])}/>
				</div>
				<div className={"newProductItem"}>
					<label>Movie Title</label>
					<input type={"text"} placeholder={"Movie Title"} name={"title"} onChange={handleChange}/>
				</div>
				<div className={"newProductItem"}>
					<label>Description</label>
					<input type={"text"} placeholder={"Description"} name={"description"} onChange={handleChange}/>
				</div>
				<div className={"newProductItem"}>
					<label>Year</label>
					<input type={"text"} placeholder={"Year"} name={"year"} onChange={handleChange}/>
				</div>
				<div className={"newProductItem"}>
					<label>Genre</label>
					<input type={"text"} placeholder={"Genre"} name={"genre"} onChange={handleChange}/>
				</div>
				<div className={"newProductItem"}>
					<label>Duration</label>
					<input type={"text"} placeholder={"Duration"} name={"duration"} onChange={handleChange}/>
				</div>
				<div className={"newProductItem"}>
					<label>Limit</label>
					<input type={"text"} placeholder={"Limit"} name={"limit"} onChange={handleChange}/>
				</div>
				<div className={"newProductItem"}>
					<label>Is Series?</label>
					<select name={"isSeries"} id={"isSeries"} onChange={handleChange}>
						<option value={"false"}>No</option>
						<option value={"true"}>Yes</option>
					</select>
				</div>
				<div className={"newProductItem"}>
					<label>Trailer</label>
					<input type={"file"} id={"trailer"} name={"trailer"} onChange={event => setTrailer(event.target.files[0])}/>
				</div>
				<div className={"newProductItem"}>
					<label>Video</label>
					<input type={"file"} id={"video"} name={"video"} onChange={event => setVideo(event.target.files[0])}/>
				</div>
				{uploaded === 5 ? (
					<button className={"newProductButton"} onClick={handleSubmit}>Create</button>
				) : (
					<button className={"newProductButton"} onClick={handleUpload}>Uploading...</button>
				)}
			</form>
		</div>
	);
};

export default NewProduct;