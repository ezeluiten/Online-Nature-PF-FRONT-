import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import style from "./PopupForm.module.css";
import validationCreate from "./validationCreate";
import { getCatalogue, updateAnimal } from "../../../store/actions/index.js";
import { useDispatch, useSelector, useEffect } from "react-redux";

export default function PopUpFormEdit({ handleUpdate, showFormEdit }) {
	let id = useSelector((state) => state.id);
	console.log(id);
	const dispatch = useDispatch();
	let catalogue = useSelector((state) => state.donationCatalogue);
	// const catalogueIds = catalogue.map(item => {
	//   return {}
	// })

	const [formData, setFormData] = useState({
		title: "",
		image: "",
		image_detail: "",
		description: "",
		amount: 0,
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
		console.log(e.target.value, e.target.name, "datos de input");
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});

		setError(
			validationCreate({
				...formData,
				[e.target.name]: e.target.value,
			})
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const itemModified = {
			title: formData?.title == "" ? undefined : formData?.title,
			image: formData?.image == "" ? undefined : formData?.image,
			image_detail:
				formData?.image_detail == "" ? undefined : formData?.image_detail,
			description:
				formData?.description == "" ? undefined : formData?.description,
			amount: formData?.amount == 0 ? undefined : formData?.amount,
		};
		console.log(itemModified, "item modificado");
		dispatch(updateAnimal(id, itemModified));
		setTimeout(function () {
			window.location.reload();
		}, 1000);
	};

	console.log(handleUpdate, "hola");
	return (
		<div className={style.containerFormCreate}>
			<Button onClick={handleUpdate} variant="success">
				Update
			</Button>{" "}
			{showFormEdit && (
				<div className={style.formPopup}>
					<div>
						<form onSubmit={handleSubmit} className={style.creationForm}>
							<h2 className={style.titleForm}>Update form</h2>
							<label htmlFor="title">Title:</label>
							<input
								className={`${error.title} && ${style.warning} ${style.inputForm}`}
								value={formData.title}
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
								value={formData.image}
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
								value={formData.image_detail}
								onChange={handleInputChange}
								type="text"
								id="image_detail"
								name="image_detail"
								placeholder="url"
							/>
							<p className={style.danger}>{error.image_detail}</p>
							<br />

							<label htmlFor="description">Description:</label>
							<textarea
								className={`${error.description} && ${style.warning} ${style.inputForm}`}
								value={formData.description}
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
								value={formData.amount}
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
									Update
								</Button>{" "}
								<Button variant="warning" onClick={handleUpdate}>
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
