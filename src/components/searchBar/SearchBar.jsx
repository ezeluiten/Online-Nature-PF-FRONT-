import React, { useState } from "react";
import style from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { getItemByName } from "../../store/actions/index";
//import searchLogo from "../../images/search.png";
//import "./searchBar.css";

const SearchBar = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState("");

	const handleName = (e) => {
		e.preventDefault();
		setTitle(e.target.value);
	};

	const handleButtonSubmit = (e) => {
		e.preventDefault();
		dispatch(getItemByName(title));
		setTitle("");
		if (!title.length) {
			window.location.reload();
		}
	};

	return (
		<form className={style.form_search_cnt}>
			<input type="search" placeholder="Search..." onChange={handleName} />
			<button type="submit" onClick={handleButtonSubmit}>
				<i class="fa-solid fa-magnifying-glass"></i>
			</button>
			{/* <img src="/#" alt="search icon" /> */}
		</form>
	);
};

export default SearchBar;

/* const SearchBar = () => {
	return (
		<div>
			<input className={style.search} />
		</div>
	);
};

export default SearchBar;
 */
