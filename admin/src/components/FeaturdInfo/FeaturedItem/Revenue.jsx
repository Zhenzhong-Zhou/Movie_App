import {ArrowDownward} from "@material-ui/icons";
import "./styles.css";

const Revenue = () => {
	return (
		<div className={"featuredItem"}>
			<span className={"featuredTitle"}>Revenue</span>
			<div className={"featuredMoneyContainer"}>
				<span className={"featuredMoney"}>$2,415</span>
				<span className={"featuredMoneyRate"}>-11.4<ArrowDownward className={"featuredIcon negative"}/></span>
			</div>
			<span className={"featuredSub"}>Compared to last month</span>
		</div>
	);
};

export default Revenue;