import styled from "styled-components";

export const FiltersContainer = styled.div``;

export const StoreCampaingContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-items: center;
	gap: 20px;
	padding-left: 140px;
	padding-right: 140px;
	background-color: #eeeeee;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%2374a180' fill-opacity='0.09' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E");
	user-select: none;
	color: #121619;
	font-family: "Poppins", sans-serif;
	@media (max-width: 600px) {
		width: 100%;
		padding-left: 20px;
		padding-right: 20px;
	}
`;
export const Card = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 300px;
	height: 400px;
	background-color: white;
	border-style: solid;
	border-width: 0.3px;
	border-radius: 20px;
	overflow: hidden;
	border-color: #dee2e6;

	transform: scale(var(--escala, 1));
	transition: transform 0.25s;
	.icon-favorites {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 10px;
		right: 10px;
		z-index: 99999;
		width: 40px;
		height: 40px;
		color: white;
		font-size: 30px;
		background-color: rgb(33, 37, 41, 0.8);
		border-radius: 100%;
		cursor: pointer;
	}
	.selected {
		color: #900a22;
	}
	a {
		cursor: auto;
	}
	h3 {
		font-size: 1.5rem;
	}
	img {
		cursor: pointer;
		object-fit: cover;
		width: 100%;
		height: 192px;
	}

	&:hover {
		--escala: 1.05;
	}
	.button {
		color: #fffbff;
		border-radius: 10px;
		padding: 5px 15px 5px 15px;
		background-color: #ea4335;
		border-color: transparent;
		transition: all 1s;
	}
	@media (max-width: 600px) {
		width: 100%;
	}
`;
export const CardLabel = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 20px 20px;
	.donate-button {
		width: 120px;
		height: 50px;
		align-self: center;
		justify-self: flex-end;
		border-style: none;
		background-color: #568259;
		color: white;
		cursor: pointer;
		border-radius: 5px;
		margin-top: auto;
	}
`;
export const CardContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 50px;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
`;
