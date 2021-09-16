import {useContext, useEffect} from "react";
import {DataGrid} from "@mui/x-data-grid";
import {DeleteOutline} from "@material-ui/icons";
import {Link} from "react-router-dom";
import "./list.css";
import {MovieContext} from "../../context/movieContext/MovieContext";
import {deleteMovies, fetchMovies} from "../../context/movieContext/apiCall";

const List = () => {
	const {movies, dispatch} = useContext(MovieContext);

	useEffect(() => {
		fetchMovies(dispatch);
	}, [dispatch]);

	const handleDelete = (id) => {
		deleteMovies(id, dispatch);
	};

	const columns = [
		{ field: '_id', headerName: 'ID', width: 90 },
		{
			field: 'movie',
			headerName: 'Movie',
			width: 150,
			editable: true,
			renderCell: (params) => {
				return (
					<div className={"productListItem"}>
						<img className={"productListImg"} src={params.row.image} alt={"Avatar"}/>
						{params.row.title}
					</div>
				);
			}
		},
		{field: 'genre', headerName: 'Genre', width: 150, editable: true,},
		{field: 'year', headerName: 'Year', width: 150, editable: true,},
		{field: 'limit', headerName: 'Limit', width: 150, editable: true,},
		{field: 'isSeries', headerName: 'Series', width: 150, editable: true,},
		{
			field: "action",
			headerName: "Action",
			width: 150,
			editable: true,
			renderCell: (params) => {
				return (
					<>
						<Link to={{pathname: `/movie/${params.row._id}`, movie: params.row}}>
							<button className={"productListEdit"}>Edit</button>
						</Link>
						<DeleteOutline className={"productListDelete"} onClick={() => handleDelete(params.row._id)}/>
					</>
				);
			}
		}
	];

	return (
		<div className={"productList"}>
			<DataGrid columns={columns} rows={movies} getRowId={row => row._id} pageSize={10} rowsPerPageOptions={[5, 10, 20, {value: movies.length, label: 'All'}]} pagination checkboxSelection disableSelectionOnClick/>
		</div>
	);
};

export default List;