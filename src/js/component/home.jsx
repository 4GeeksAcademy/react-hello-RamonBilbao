import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import { Card } from "./Card";
import Footerr from "./Footerr";

//create your first component
const Home = () => {
	const description_one = "Lorem ipsum odor amet, consectetuer adipiscing elit." 
	const description_two = "Lorem ipsum odor amet, consectetuer adipiscing elit. Quam vivamus purus orci cras mi ultrices fermentum gravida. Massa feugiat tortor maximus nullam auctor inceptos erat habitant."
	const description_tre = "Lorem ipsum odor amet, consectetuer adipiscing elit. Vel laoreet augue habitasse vel elit felis lacinia suscipit."
	const description_for = "Lorem ipsum odor amet, consectetuer adipiscing elit. Aliquam praesent vel posuere conubia nascetur nibh. Quisque himenaeos felis justo neque non maecenas."

	const image_one ="https://static1.millenium.org/articles/9/32/22/69/@/834051-guide-heimeringer-lol-article_m-3.jpg"
    const image_two ="https://static1.millenium.org/articles/9/32/22/69/@/834051-guide-heimeringer-lol-article_m-3.jpg"
	const image_tre ="https://static1.millenium.org/articles/9/32/22/69/@/834051-guide-heimeringer-lol-article_m-3.jpg"
	const image_for ="https://static1.millenium.org/articles/9/32/22/69/@/834051-guide-heimeringer-lol-article_m-3.jpg"
	return (
		<>
			<div className="container">
			<Navbar />
			<Jumbotron />
				<div className="row">
					<Card description={description_one}image={image_one} />
					<Card description={description_two}image={image_two}/>
					<Card description={description_tre}image={image_tre}/>
					<Card description={description_for}image={image_for}/>
			<Footerr/>
					
				</div>
			</div>
			
		</>
	)

};


export default Home;



