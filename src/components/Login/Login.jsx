import style from "./Login.module.css";

export default function Login({loginFn}) {
	return (
		<div className={style.login}>
			<h4> Log In </h4>
			<p> to your account </p>
			<div className={style.logbox}>
				<div className={style.inputbox}>
					<input type="text" />
					<span> User Name</span>
					<div>
						<div className={style.inputbox}>
							<input type="password" />
							<span> Password</span>
						</div>
					</div>
					<button type="submit" className={style.button}>
						Log In
					</button>
					<button onClick={()=>loginFn()} className={style.button}>
						Log in with Google
					</button>
					
				</div>
				<div className={style.bcgimage}></div>
			</div>
		</div>
	);
}
