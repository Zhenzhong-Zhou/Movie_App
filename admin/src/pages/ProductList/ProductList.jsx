import {useState} from "react";
import {DataGrid} from "@mui/x-data-grid";
import {DeleteOutline} from "@material-ui/icons";
import {Link} from "react-router-dom";
import "./styles.css";
import {productRows} from "../../boilerplateData";

const ProductList = () => {
	const [data, setData] = useState(productRows);

	const handleDelete = (id) => {
		setData(data.filter(item => item.id !== id));
	};

	const columns = [
		{ field: 'id', headerName: 'ID', width: 90 },
		{
			field: 'product',
			headerName: 'Product',
			width: 150,
			editable: true,
			renderCell: (params) => {
				return (
					<div className={"productListItem"}>
						<img className={"productListImg"} src={params.row.image} alt={"Avatar"}/>
						{params.row.name}
					</div>
				);
			}
		},
		{
			field: 'stock',
			headerName: 'Stock',
			width: 150,
			editable: true,
		},
		{
			field: 'status',
			headerName: 'Status',
			width: 150,
			editable: true,
		},
		{
			field: 'price',
			headerName: 'Price',
			width: 200,
			editable: true,
		},
		{
			field: "action",
			headerName: "Action",
			width: 150,
			editable: true,
			renderCell: (params) => {
				return (
					<>
						<Link to={`/movie/${params.row.id}`}>
							<button className={"productListEdit"}>Edit</button>
						</Link>
						<DeleteOutline className={"productListDelete"} onClick={() => handleDelete(params.row.id)}/>
					</>
				);
			}
		}
	];

	return (
		<div className={"productList"}>
			<DataGrid columns={columns} rows={data} key={data._id} pageSize={5} rowsPerPageOptions={[5, 10, 20, {value: data.length, label: 'All'}]} pagination checkboxSelection disableSelectionOnClick/>
		</div>
	);
};

export default ProductList;