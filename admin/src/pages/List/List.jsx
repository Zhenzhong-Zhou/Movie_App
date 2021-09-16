import {useContext, useEffect} from "react";
import {DataGrid} from "@mui/x-data-grid";
import {DeleteOutline} from "@material-ui/icons";
import {Link} from "react-router-dom";
import "./list.css";
import {deleteLists, fetchLists} from "../../context/listContext/apiCall";
import {ListContext} from "../../context/listContext/ListContext";

const List = () => {
	const {lists, dispatch} = useContext(ListContext);

	useEffect(() => {
		fetchLists(dispatch);
	}, [dispatch]);

	const handleDelete = (id) => {
		deleteLists(id, dispatch);
	};

	const columns = [
		{ field: '_id', headerName: 'ID', width: 250 },
		{field: 'title', headerName: 'Title', width: 250, editable: true,},
		{field: 'genre', headerName: 'Genre', width: 150, editable: true,},
		{field: 'type', headerName: 'type', width: 150, editable: true,},
		{field: "action", headerName: "Action", width: 150, editable: true,
			renderCell: (params) => {
				return (
					<>
						<Link to={{pathname: `/list/${params.row._id}`, list: params.row}}>
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
			<DataGrid columns={columns} rows={lists} getRowId={row => row._id} pageSize={10}
			          rowsPerPageOptions={[5, 10, 20, {value: lists.length, label: 'All'}]} pagination
			          checkboxSelection disableSelectionOnClick/>
		</div>
	);
};

export default List;