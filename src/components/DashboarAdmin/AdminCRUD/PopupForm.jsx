import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import style from "./PopupForm.module.css";
import validationCreate from "./validationCreate";
import { useDispatch, useSelector } from "react-redux";
import { postNewAnimal, postNewTree } from "../../../store/actions";
import { Link } from "react-router-dom";

export default function FormPopup({ handleClick, showForm }) {
	const typeOfItem = ["animal", "tree"];

	const dispatch = useDispatch();

	const [fomrInfo, setFormInfo] = useState({
		title: "",
		image: "",
		image_detail: "",
		description: "",
		amount: 0,
		item_type: [],
	});

	const [error, setError] = useState({
		title: "",
		image: "",
		image_detail: " ",
		description: "",
		amount: 0,
		item_type: [],
	});

	const handleInputChange = (e) => {
		setFormInfo({
			...fomrInfo,
			[e.target.name]: e.target.value,
		});

		setError(
			validationCreate({
				...fomrInfo,
				[e.target.name]: e.target.value,
			})
		);
	};

	const handleSelectForItems = (e) => {
		setFormInfo({
			...fomrInfo,
			item_type: [...new Set([...fomrInfo.item_type, e.target.value])],
		});

		setError(
			validationCreate({
				...fomrInfo,
				[e.target.name]: e.target.value,
			})
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!Object.keys(error).length) {
			if (fomrInfo.item_type.toString() === "tree") {
				dispatch(postNewTree(fomrInfo));
				setFormInfo({
					title: "",
					image: "",
					image_detail: "",
					description: "",
					amount: 0,
					item_type: [],
				});

				setError(
					validationCreate({
						...fomrInfo,
						[e.target.name]: e.target.value,
					})
				);
				alert("Item created successfully");
			} else {
				dispatch(postNewAnimal(fomrInfo));
				setFormInfo({
					title: "",
					image: "",
					image_detail: "",
					description: "",
					amount: 0,
					item_type: [],
				});

				setError(
					validationCreate({
						...fomrInfo,
						[e.target.name]: e.target.value,
					})
				);
				alert("Item created successfully");
			}
		} else {
			alert("You must comple the form");
		}
	};

	return (
		<div className={style.containerFormCreate}>
			<Button onClick={handleClick} variant="success">
				Create
			</Button>{" "}
			{showForm && (
				<div className={style.formPopup}>
					<div>
						<form onSubmit={handleSubmit} className={style.creationForm}>
							<h2 className={style.titleForm}>Creation form</h2>
							<label htmlFor="title">Item type:</label>
							<select className={style.select} onChange={handleSelectForItems}>
								<option value="platforms" defaultChecked>
									select
								</option>
								{typeOfItem?.map((item, i) => (
									<option key={i} value={item}>
										{item}
									</option>
								))}
							</select>
							<p className={style.danger}>{error.item_type}</p>
							<br />
							<label htmlFor="title">Title:</label>
							<input
								className={`${error.title} && ${style.warning} ${style.inputForm}`}
								value={fomrInfo.title}
								onChange={handleInputChange}
								type="text"
								id="title"
								name="title"
								placeholder="ej: Pig"
							/>
							<p className={style.danger}>{error.title}</p>
							<br />

							<label htmlFor="image">Image</label>
							<input
								className={`${error.image} && ${style.warning} ${style.inputForm}`}
								value={fomrInfo.image}
								onChange={handleInputChange}
								type="text"
								id="image"
								name="image"
								placeholder="URL"
							/>
							<p className={style.danger}>{error.image}</p>
							<br />

							<label htmlFor="image_detail">Image detail:</label>
							<input
								className={`${error.image_detail} && ${style.warning} ${style.inputForm}`}
								value={fomrInfo.image_detail}
								onChange={handleInputChange}
								type="text"
								id="image_detail"
								name="image_detail"
								placeholder="URL"
							/>
							<p className={style.danger}>{error.image_detail}</p>
							<br />

							<label htmlFor="description">Description:</label>
							<textarea
								className={`${error.description} && ${style.warning} ${style.inputForm}`}
								value={fomrInfo.description}
								onChange={handleInputChange}
								type="text"
								id="description"
								name="description"
								placeholder="Description"
							/>
							<p className={style.danger}>{error.description}</p>
							<br />

							<label htmlFor="amount">Amount:</label>
							<input
								className={`${error.amount} && ${style.warning} ${style.inputForm}`}
								value={fomrInfo.amount}
								onChange={handleInputChange}
								type="number"
								id="amount"
								name="amount"
								placeholder="ej: 30"
							/>
							<p className={style.danger}>{error.amount}</p>
							<br />
							<div className={style.buttonsForm}>
								<Button type="submit" variant="success">
									Create
								</Button>{" "}
								<Button variant="warning" onClick={handleClick}>
									Go back
								</Button>{" "}
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
