import React from 'react';
import { Carousel } from 'react-responsive-carousel';

//Local Imports
import "../styles/Home.css"
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"
import SliderOne from "../assets/tinified/new-store3.jpg"
import SliderTwo from "../assets/tinified/new-couch.jpg"
import SliderThree from "../assets/tinified/new-dresser.jpg"
import SliderFour from "../assets/tinified/new-print.jpg"
import FeatureOne from "../assets/tinified/feature1.jpg"
import FeatureTwo from "../assets/tinified/feature2.jpg"
import FeatureThree from "../assets/tinified/feature3.jpg"


const Home = (props) => (
	<main className="home">
		<HeaderCarousel/>
		<div className="container">
			<div className="row">
				<div className="column">
					<h1>Welcome To <span>Lemon Tree <span>Vintage Market</span></span></h1>
				</div>
				<div className="column">
					<p>A unique collection of refreshed antiques, salvaged goods, vintage home decor and one-of-a-kind re-purposed pieces to create your own distinctive look.</p>
				</div>
			</div>
			<h2>Featured Items</h2>
			<p className="width-sm">Here are some of our favorite items we have made and or sold in the past. If you see something you like, let us know and we can provide you with more information on the product.</p>
			<div className="featured-items">
				<div className='item'>
					<img src={FeatureOne}/>
					<span>Vintage Sette<br></br>-<br></br>$579</span>
				</div>
				<div className='item'>
					<img src={FeatureTwo}/>
					<span>Scientific Vase on Woodland Shelf<br></br>-<br></br>$65</span>
				</div>
				<div className='item'>
					<img src={FeatureThree}/>
					<span>Dark Walnut Vintage Drop Leaf Table &amp; Chairs<br></br>-<br></br>$399</span>
				</div>
			</div>
		</div>
	</main>
)


const HeaderCarousel = () => (
	<Carousel 
		showArrows={false} 
		showThumbs={false} 
		showStatus={false}
		infiniteLoop={true}
		autoPlay={true}
		stopOnHover={false}
	>
        <div>
            <img src={SliderOne} />
        </div>
        <div>
            <img src={SliderTwo} />
        </div>
        <div>
            <img src={SliderThree} />
        </div>
        <div>
            <img src={SliderFour} />
        </div>
    </Carousel>
)


export {Home}