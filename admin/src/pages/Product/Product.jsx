import {Link, useLocation} from "react-router-dom";
import "./styles.css";
import {Publish} from "@material-ui/icons";

const Product = () => {
	const {movie} = useLocation();

	return (
		<div className={"product"}>
			<div className={"productTitleContainer"}>
				<h1 className={"productTitle"}>Movie</h1>
				<Link to={"/NewMovie"}>
					<button className={"productAddButton"}>Create</button>
				</Link>
			</div>
			<div className={"productTop"}>
				<div className={"productTopRight"}>
					<div className={"productInfoTop"}>
						<img className={"productInfoImg"} src={movie.image} alt={"Product Cover"}/>
						<span className={"productName"}>{movie.title}</span>
					</div>
					<div className={"productInfoBottom"}>
						<div className={"productInfoItem"}>
							<span className={"productInfoKey"}>id:</span>
							<span className={"productInfoValue"}>{movie._id}</span>
						</div>
						<div className={"productInfoItem"}>
							<span className={"productInfoKey"}>genre:</span>
							<span className={"productInfoValue"}>{movie.genre}</span>
						</div>
						<div className={"productInfoItem"}>
							<span className={"productInfoKey"}>year:</span>
							<span className={"productInfoValue"}>{movie.year}</span>
						</div>
						<div className={"productInfoItem"}>
							<span className={"productInfoKey"}>limit:</span>
							<span className={"productInfoValue"}>{movie.limit}</span>
						</div>
					</div>
				</div>
			</div>
			<div className={"productBottom"}>
				<form className={"productForm"}>
					<div className={"productFormLeft"}>
						<label>Movie Title</label>
						<input type={"text"} placeholder={movie.title}/>
						<label>Year</label>
						<input type={"text"} placeholder={movie.year}/>
						<label>Genre</label>
						<input type={"text"} placeholder={movie.genre}/>
						<label>Duration</label>
						<input type={"text"} placeholder={movie.duration}/>
						<label>Limit</label>
						<input type={"text"} placeholder={movie.limit}/>
						<label>Trailer</label>
						<input type={"file"} placeholder={movie.trailer}/>
						<label>Video</label>
						<input type={"file"} placeholder={movie.video}/>
					</div>
					<div className={"productFormRight"}>
						<div className={"productUpload"}>
							<img src={movie.image} alt={"Product Cover"} className={"productUploadImg"}/>
							<label htmlFor={"file"}>
								<Publish/>
							</label>
							<input type={"file"} id={"file"} style={{display: "none"}}/>
						</div>
						<button className={"productFormButton"}>Update</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Product;