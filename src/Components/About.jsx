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
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas purus magna, ut dapibus est fringilla dignissim. Aenean mollis at eros a commodo. Ut vel erat velit. In hac habitasse platea dictumst. Vestibulum dui risus, interdum in gravida vehicula, consequat vel velit. Vestibulum ac aliquet ligula. Proin eget facilisis nisl. sed hendrerit augue nisl ac quam.</p>
			</div>
			<div className="column">
				<img src={AboutImage} />
			</div>
		</div>
	</main>
)



export {About}