import React, { useState } from "react";
import Navbar from "../../NavBar/NavBar";
import {
	ProfileContainer,
	ProfileContainerView,
} from "./ProfileSettingsStyles";
import zorro from "../../../imagenes/zorro.jpg";
import sunrise from "../../../imagenes/sunrise.jpg";
import { ViewSelected } from "./ViewSelected";
import { setSettingsModalGate } from "../../../store/actions/index";
import { useDispatch, useSelector } from "react-redux";

export const ProfileSettings = () => {
	const dispatch = useDispatch();

	const [isOpen, setIsOpen] = useState({
		open: true,
		view: "family",
	});

	const handleToggle = (view) => {
		const open = isOpen.open;
		setIsOpen({
			open: open,
			view,
		});
	};
	const { payer, isOpenSettingsModal } = useSelector((state) => state);
	const openSettingsModal = () => {
		dispatch(setSettingsModalGate(isOpenSettingsModal));
	};
	return (
		<ProfileContainerView
			onClick={isOpenSettingsModal ? () => openSettingsModal() : null}
		>
			{/* <img src={zorro} style={{
            "position":"fixed"
        }}/> */}

			<Navbar />
			<ProfileContainer>
				<div className="settings-panel-options-picker">
					<p className="p-settings" onClick={() => handleToggle("family")}>
						Family members preserved
					</p>
					<p className="p-settings" onClick={() => handleToggle("favorites")}>
						Favorite adoption prospects
					</p>
				</div>
				<ViewSelected className="active-view" isOpen={isOpen}></ViewSelected>
			</ProfileContainer>
		</ProfileContainerView>
	);
};
