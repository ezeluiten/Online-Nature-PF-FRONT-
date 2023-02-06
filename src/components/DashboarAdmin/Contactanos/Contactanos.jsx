import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import style from "./Contactanos.module.css";
import Navbar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lsrdnci",
        "template_yi7kks9",
        form.current,
        "y7tTj_cFGp5hY60I7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your email was sent",
      showConfirmButton: false,
      timer: 1500,
    });
    e.target.reset();
  };

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

  const img = require("../../../imagenes/Felicidad02.jpg");

  return (
    <>
      <Navbar />
      <Header imagen={img} text="Contact with the Nature..." />
      <div className={style.contact}></div>
      <form ref={form} onSubmit={sendEmail} className={style.contact_form}>
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
