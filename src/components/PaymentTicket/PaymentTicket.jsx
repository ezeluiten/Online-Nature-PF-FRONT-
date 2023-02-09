import React from "react";
import style from "./PaymentTicket.module.css";

const PaymentTicket = (props) => {
	return (
		<div className={style.payment_ticket}>
			<h2>Here is your Payment Ticket</h2>
			<p>Amount: {props.amount}</p>
			<p>Payment Method: {props.method}</p>
			<p>Date: {props.date}</p>
		</div>
	);
};

export default PaymentTicket;
