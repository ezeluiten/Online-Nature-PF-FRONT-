import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsMailbox } from "react-icons/bs";
import style from "./Register.module.css";

const regexUser = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword =
  /(?=(.*[0-9]))(?=.*[!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;

const validation = (userDate) => {
  let errors = {};

  if (!regexUser.test(userDate.username)) {
    errors.username = "Debe ser un correo electrónico";
  }
  if (userDate.username.length >= 35) {
    errors.username = "Debe tener menos de 35";
  }
  if (!userDate.username) {
    errors.username = "No puede quedar vacio Username";
  }
  if (!regexPassword.test(userDate.password)) {
    errors.password = "La contraseña es invalida";
  }

  return errors;
};

export default function Register(props) {
  const [userDate, setUserDate] = useState({
    username: "",
    mail: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    mail: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const nombre = event.target.name;
    const valor = event.target.value;
    setUserDate({ ...userDate, [nombre]: valor });

    setErrors(
      validation({
        ...userDate,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!errors.password && !errors.username) {
    }
  };

  return (
    <div className={style.register}>
      <div className={style.container}>
        <div className={style.logo}></div>
        <h4>Create an account</h4>
        <form onSubmit={handleSubmit}>
          <div className={style.sudContainer}>
            <h6>Name</h6>
            <input
              className={style.Entrada}
              name="username"
              type="text"
              placeholder="Enter your Nama"
              value={userDate.username}
              onChange={handleInputChange}
            />
            <h6>Email</h6>
            <input
              className={style.Entrada}
              name="mail"
              type="email"
              placeholder="Enter your Email"
              value={userDate.mail}
              onChange={handleInputChange}
            />
            <h6>Password</h6>
            <input
              className={style.Entrada}
              name="password"
              type="password"
              placeholder="Enter your Password"
              value={userDate.password}
              onChange={handleInputChange}
            />
          </div>

          <div className={style.botones}>
            <button className={style.logMail} type="submit">
              <BsMailbox />
              Get Started
            </button>

            <button className={style.logGoogle}>
              {" "}
              <FcGoogle /> Log in whith Google
            </button>
          </div>

          <div className={style.mensaje}>
            <span>Do you have an account?</span>
            <NavLink to={"/login"} className={style.link}>
              Log in
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
