import React, { useState } from "react";
import style from "./Contactanos.module.css";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData);
	};

	return (
		<>
			<Navbar />
			<div className={style.contact}>
				<h2>CONTACT US</h2>
			</div>
			<form onSubmit={handleSubmit} className={style.contact_form}>
				<input
					type="text"
					name="name"
					placeholder="Name"
					value={formData.name}
					onChange={handleChange}
					required
					className={style.form_input}
				/>
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleChange}
					required
					className={style.form_input}
				/>
				<textarea
					name="message"
					placeholder="Message"
					value={formData.message}
					onChange={handleChange}
					required
					className={style.form_textarea}
				/>
				<button type="submit" className={style.form_button}>
					Send
				</button>
			</form>
			<Footer />
		</>
	);
};

export default ContactForm;
