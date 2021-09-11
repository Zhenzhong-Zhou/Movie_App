import {useRef, useState} from "react";
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@material-ui/icons";
import "./list.scss";
import List from "./List/List";

const Lists = ({list}) => {
	const [isMoved, setIsMoved] = useState(false);
	const [slideNumber, setSlideNumber] = useState(0);
	const listRef = useRef();

	const handleClick = (direction) => {
		setIsMoved(true);
		let distance = listRef.current.getBoundingClientRect().x - 50;
		if (direction === "left" && slideNumber > 0) {
			setSlideNumber(slideNumber - 1);
			listRef.current.style.transform = `translateX(${230 + distance}px)`;
		}
		if (direction === "right" && slideNumber < 5) {
			setSlideNumber(slideNumber + 1);
			listRef.current.style.transform = `translateX(${-230 + distance}px)`;
		}
	};

	return (
		<div className={"lists"}>
			<span className={"listsTitle"}>{list.title}</span>
			<div className={"wrapper"}>
				<ArrowBackIosOutlined
					className={"sliderArrow left"}
					onClick={() => handleClick("left")}
					style={{display: !isMoved && "none"}}/>
				<div className={"container"} ref={listRef}>
					{list.content.map((item, index) => (
						<List index={index} item={item}/>
					))}
				</div>
				<ArrowForwardIosOutlined className={"sliderArrow right"} onClick={() => handleClick("right")}/>
			</div>
		</div>
	);
};

export default Lists;