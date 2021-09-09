import {InfoOutlined, PlayArrow} from "@material-ui/icons";
import "./featured.scss";
import cover from "../../assets/images/user.jpeg";
import name from "../../assets/images/movie_name.jpeg";

const Featured = ({type}) => {
	return (
		<div className={"featured"}>
			{type && (
				<div className={"category"}>
					<span>{type === "movie" ? "Movies" : "TV Series"}</span>
					<select name={"genre"} id={"genre"}>
						<option>Genre</option>
						<option value="adventure">Adventure</option>
						<option value="comedy">Comedy</option>
						<option value="crime">Crime</option>
						<option value="fantasy">Fantasy</option>
						<option value="historical">Historical</option>
						<option value="horror">Horror</option>
						<option value="romance">Romance</option>
						<option value="sci-fi">Sci-fi</option>
						<option value="thriller">Thriller</option>
						<option value="western">Western</option>
						<option value="animation">Animation</option>
						<option value="drama">Drama</option>
						<option value="documentary">Documentary</option>
					</select>
				</div>
			)}
			<img width={"100%"} src={cover} alt={"Cover"}/>
			<div className={"info"}>
				<img width={"100%"} src={name} alt={"Cover"}/>
				<span className={"descriptions"}>
					South Boston teenager Jason Tripitikas is a fan of martial arts films and awakens from a dream of a
					battle between the Monkey King and celestial soldiers in the clouds. He visits a pawn shop in
					Chinatown to buy wuxia DVDs and discovers a golden staff. On his way home, Tripitikas is harassed
					by some hooligans, whose leader Lupo attempts to use him to help them rob the shop-owner Hop, who is
					shot by Lupo. Hop tells Tripitikas to deliver the staff to its rightful owner and Tripitikas flees
					with the staff. He is cornered on the rooftop before being pulled off the roof by the staff.
				</span>
				<div className={"buttons"}>
					<button className={"play"}>
						<PlayArrow/>
						<span>Play</span>
					</button>
					<button className={"more"}>
						<InfoOutlined/>
						<span>Info</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;