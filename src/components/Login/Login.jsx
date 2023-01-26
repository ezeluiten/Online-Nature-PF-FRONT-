import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsMailbox } from "react-icons/bs";
import style from "./Login.module.css";

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

export default function Login({ loginFn }) {
  const [userDate, setUserDate] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

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
    <div className={style.login}>
      <div className={style.container}>
        <div className={style.logo}></div>
        <h4>Log in to your account</h4>
        <form onSubmit={handleSubmit}>
          <div className={style.Contenedor}>
            <div className={style.sudContainer}>
              <h6>Email</h6>
              <input
                className={style.Entrada}
                name="username"
                type="email"
                placeholder="example@example.com"
                value={userDate.username}
                onChange={handleInputChange}
              />
              {errors.username ? (
                <p className={style.danger}>
                  <strong>{errors.username}</strong>
                </p>
              ) : (
                <p className={style.ok}>ok</p>
              )}

              <h6>Password</h6>
              <input
                className={style.Entrada}
                name="password"
                type="password"
                placeholder="Enter your Password"
                value={userDate.password}
                onChange={handleInputChange}
              />
              {errors.password ? (
                <p className={style.danger}>
                  <strong>{errors.password}</strong>
                </p>
              ) : (
                <p className={style.ok}>ok</p>
              )}
            </div>
            <div className={style.botones}>
              <button className={style.logMail} type="submit">
                <BsMailbox /> Log in whith Mail
              </button>

              <button className={style.logGoogle}>
                {" "}
                <FcGoogle /> Log in whith Google
              </button>
            </div>
            <div className={style.mensaje}>
              <span>Don’t have an account?</span>
              <NavLink to={"register"} className={style.link}>
                Sign up
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// import style from "./Login.module.css";

// export default function Login({loginFn}) {
// 	return (
// 		<div className={style.login}>
// 			<h4> Log In </h4>
// 			<p> to your account </p>
// 			<div className={style.logbox}>
// 				<div className={style.inputbox}>
// 					<input type="text" />
// 					<span> User Name</span>
// 					<div>
// 						<div className={style.inputbox}>
// 							<input type="password" />
// 							<span> Password</span>
// 						</div>
// 					</div>
// 					<button type="submit" className={style.button}>
// 						Log In
// 					</button>
// 					<button onClick={()=>loginFn()} className={style.button}>
// 						Log in with Google
// 					</button>

// 				</div>
// 				<div className={style.bcgimage}></div>
// 			</div>
// 		</div>
// 	);
// }
