import React from 'react';
import { Link } from 'react-router-dom'

//Local Imports
import "../styles/Navigation.css"
import Logo from "../assets/logo.jpg"
import PhoneIcon from "../assets/phone.png"
import EmailIcon from "../assets/email.png"


const Navigation = (props) => (
	<nav>
		<div className="nav-section">
			<ul>
				<Link to="/">
					<li>
						Home
					</li>
				</Link>
				<Link to="/about">
					<li>
						About
					</li>
				</Link>
				<Link to="/contact">
					<li>
						Contact
					</li>
				</Link>
			</ul>
		</div>
		<div className="nav-section">
			<img src={Logo} className="logo"/>
		</div>
		<div className="nav-section">
			<a href="tel:813-494-4295"><span><img src={PhoneIcon} width="30"/> (813)-494-4295</span></a>
			<a href="mailto:lemontree@earthlink.net"><span><img src={EmailIcon} width="30"/> lemontree@earthlink.net</span></a>
			<p style={{marginTop: 5}}><strong>Hours:</strong> Tue-Sat: 10am-4pm</p>
		</div>
	</nav>
)



export {Navigation}