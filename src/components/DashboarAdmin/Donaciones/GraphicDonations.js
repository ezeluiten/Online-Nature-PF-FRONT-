import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDonationsByLastThreeMonths } from "../../../store/actions/index";
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
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getDonationsByLastThreeMonths());
	}, [dispatch]);
	const donationsThreeMonths = useSelector((s) => s.donationsThreeMonths);

	const data = donationsThreeMonths.data?.map((e) => ({
		month: e.month,
		amount: e.amount,
		quantity: e.quantity,
	}));

	return (
		<>
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
					<XAxis dataKey="month" />
					<YAxis />
					<Tooltip />
					<Legend />

					{/* <Bar dataKey="quantity" fill="#568259" /> */}
					<Bar dataKey="quantity" fill="#ff7782" />
				</BarChart>
			</ResponsiveContainer>
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
					<XAxis dataKey="month" />
					<YAxis />
					<Tooltip />
					<Legend />

					<Bar dataKey="amount" fill="#81e4c3" />
					{/* <Bar dataKey="amount" fill="#ff7782" /> */}
				</BarChart>
			</ResponsiveContainer>
		</>
	);
};

export default GraphicDonations;
