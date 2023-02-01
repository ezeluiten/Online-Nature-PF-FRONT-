import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ProfileSectionContainer } from "./ProfileStyles";
import { useDispatch, useSelector } from "react-redux";
import {setSettingsModalGate, syncLoggedUserWithDb} from "../../store/actions/index"
import { ModalMenuSettings } from "./modalSettings/ModalMenuSettings";
import coala from "../../imagenes/koala.webp"

export const Profile = ({isAuthenticated}) => {

  const { logout } = useAuth0();
  const dispatch = useDispatch()
  const { payer, isOpenSettingsModal } = useSelector((state) => state);

  useEffect(() => {
    checkProfileAndOrCreateIt(payer)
  }, [payer])
  

  const openSettingsModal = ()=>{
    dispatch(setSettingsModalGate(isOpenSettingsModal))
  }
  
  const checkProfileAndOrCreateIt = (clientInfo) => {
    console.log("🚀 ~ file: Profile.js:25 ~ checkProfileAndOrCreateIt ~ clientInfo", clientInfo)
    if(clientInfo && clientInfo.email){
      dispatch(syncLoggedUserWithDb(clientInfo))
    }
  }

  if (isAuthenticated) {
    return (
      <>
        <ProfileSectionContainer onClick={()=>openSettingsModal()}>
          <div className="img-container" >
            <img src={ payer.picture ||coala } alt={payer.given_name} />
          </div>
          
          {/* <button onClick={logout}>log out</button> */}
        </ProfileSectionContainer>
        <ModalMenuSettings isOpen={isOpenSettingsModal}/>
      </>
    );
  }
};
