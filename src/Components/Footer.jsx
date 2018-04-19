import React from 'react';
import { Link } from 'react-router-dom'

//Local Imports
import "../styles/Footer.css"
import '../styles/index.css';
import PhoneIcon from "../assets/yellow-phone.png"
import EmailIcon from "../assets/yellow-mail.png"
import InstagramIcon from "../assets/instagram-filled.png"
import FacebookIcon from "../assets/facebook-filled.png"

const Footer = (props) => (
	<footer>
		<div className="container">
		<div className="footer-content">
			<div className="footer-section">
				<h3>Links</h3>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/About">About Us</Link></li>
					<li><Link to="/Contact">Contact</Link></li>
				</ul>
			</div>
			<div className="footer-section">
				<h3>Get In Touch</h3>
				<div className="contact-info">
					<a href="tel:813-494-4295"><span><img src={PhoneIcon} width="30"/> (813)-494-4295</span></a>
					<a href="mailto:lemontree@earthlink.net"><span><img src={EmailIcon} width="30"/> lemontree@earthlink.net</span></a>
				</div>
				<p>596 Indian Rocks Road North</p>
				<p>Belleair Bluffs, Florida 33770</p>
			</div>
			<div className="footer-section">
				<h3>Follow Us</h3>
				<div className="social-media">
					<a href="https://www.facebook.com/lemontreevintagemarket/" target="_blank">
						<img src={FacebookIcon} width="30" />
					</a>
					<a href="https://www.instagram.com/lemontreevintage/" target="_blank">
						<img src={InstagramIcon} width="30"/>
					</a>
				</div>
			</div>
		</div>
		</div>
		<small>Copyright &copy; 2018 Lemon Tree Vintage Market. All Rights Reserved</small>
	</footer>
)



export {Footer}