import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ProfileSectionContainer } from "./ProfileStyles";
import { useDispatch, useSelector } from "react-redux";
import {setSettingsModalGate} from "../../store/actions/index"
import { ModalMenuSettings } from "./modalSettings/ModalMenuSettings";

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
  
  const checkProfileAndOrCreateIt = (clientInfo)=>{
    
  }

  if (isAuthenticated) {
    return (
      <>
        <ProfileSectionContainer onClick={()=>openSettingsModal()}>
          <div className="img-container" >
            <img src={payer.picture} alt={payer.name} />
          </div>
          
          {/* <button onClick={logout}>log out</button> */}
        </ProfileSectionContainer>
        <ModalMenuSettings isOpen={isOpenSettingsModal}/>
      </>
    );
  }
};
