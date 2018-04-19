import React from 'react';

//Local Imports
import "../styles/About.css"
import '../styles/index.css';
import AboutImage from "../assets/about.jpg"

const About = (props) => (
	<main className="container">
		<h1>About Us</h1>
		<div className="row">
			<div className="column">
				<p>Amy Lemons McDermott has over 15 years of home décor experience with Accents by Amy and has been repurposing furniture for the past six years with her good friend Diana McDougall.  Amy and Diana have a keen eye and a real gift for finding that special item to complement any home’s décor. Amy opened The Lemon Tree Vintage Market in Belleair Bluffs in October 2017 and included her family name into the store’s in honor of her mom, who prided herself on restoring furniture, with a limited budget, to create a beautiful home for the seven Lemons kids.  The fallen lemon in the store’s logo represents this matriarch of the Lemons family. The Lemon Tree Vintage Market offers a distinctive collection of refreshed antiques, painted furniture, salvaged goods, home décor and gifts.  The store recently expanded to include space for local vendors and artisans to exhibit their work. The Lemon Tree offers a warm and inviting experience to visitors – whether you are there looking for a specific gift idea or unique piece of furniture, just browsing, or simply stopping by to say “Hi!”  Everyone coming in gets a smile and is made to feel welcome. So, stop in to The Lemon Tree Vintage Market.  We are sure you’ll either find something you like, or you’ll leave with some inspiration.</p>
			</div>
			<div className="column">
				<img src={AboutImage} />
			</div>
		</div>
	</main>
)



export {About}