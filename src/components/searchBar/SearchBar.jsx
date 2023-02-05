import React from "react";
import style from "./SearchBar.module.css";

const SearchBar = () => {
	return (
		<div>
			<input className={style.search} />
		</div>
	);
};

export default SearchBar;
