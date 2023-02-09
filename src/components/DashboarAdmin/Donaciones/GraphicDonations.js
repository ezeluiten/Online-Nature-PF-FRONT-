import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDonations, getTickets } from "../../../store/actions/index";
import {
	CartesianGrid,
	ResponsiveContainer,
	XAxis,
	YAxis,
	Legend,
	Tooltip,
	BarChart,
	Bar,
} from "recharts";

const GraphicDonations = () => {
	const data = [
		{ mes: "January", donations: "100", amount: "200" },
		{ mes: "February", donations: "50", amount: "2000" },
		/*  {mes:"March",     donations:"",   total_amount:"",},
            {mes:"April",     donations:"",   total_amount:"",},
			{mes:"May",       donations:"",   total_amount:"",},
            {mes:"June",      donations:"",   total_amount:"",},
            {mes:"July",      donations:"",   total_amount:"",},
            {mes:"August",    donations:"",   total_amount:"",},
            {mes:"September", donations:"",   total_amount:"",},
			{mes:"October",   donations:"",   total_amount:"",}, */
		{ mes: "November", donations: "90", amount: "1000" },
		{ mes: "December", donations: "60", amount: "500" },
	];

	const tickets = useSelector((s) => s.tickets);
	console.log(tickets);
	const dispatch = useDispatch();
	const [allTickets, setAllTickets] = useState(null);

	useEffect(() => {
		dispatch(getDonations());
		dispatch(getTickets());
	}, [dispatch]);

	useEffect(() => {
		const ticketsArray = Array(12).fill(0);
		tickets.forEach((ticket) => {
			const date = new Date(ticket.date);
			ticketsArray[date.getMonth()] += ticket.amount;
		});
		setAllTickets(ticketsArray);
	}, [tickets]);

	return (
		<ResponsiveContainer padding={{ bottom: 500 }} width="100%" aspect={2}>
			<BarChart
				data={data}
				width={500}
				height={300}
				margin={{
					top: 5,
					right: 30,
					left: 25,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="4 1 2" />
				<XAxis dataKey="mes" />
				<YAxis />
				<Tooltip />
				<Legend />

				<Bar dataKey="donations" fill="#568259" />
				<Bar dataKey="amount" fill="#ff7782" />
			</BarChart>
		</ResponsiveContainer>
	);
};

export default GraphicDonations;
