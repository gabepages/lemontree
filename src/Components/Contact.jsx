import React from 'react';

//Local Imports
import '../styles/Contact.css';
import '../styles/index.css';
import PhoneIcon from "../assets/phone.png"
import EmailIcon from "../assets/email.png"

const Contact = (props) => (
	<main className="container">
		<h1>Contact Us</h1>
		<p>Thank you for visiting The Lemon Tree Vintage Market Website. We would be happy to answer any questions you have about our shop! You can contact us by phone or email and we will get back to you as soon as possible.</p>
		<div className="contact-info">
			<a href="tel:813-494-4295"><span><img src={PhoneIcon} width="30"/> (813)-494-4295</span></a>
			<a href="mailto:lemontree@earthlink.net"><span><img src={EmailIcon} width="30"/> lemontree@earthlink.net</span></a>
		</div>
	</main>
)



export {Contact}