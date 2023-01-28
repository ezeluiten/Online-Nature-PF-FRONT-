import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { ModalContainer } from './ModalStyles'

export const ModalMenuSettings = ({isOpen, handleClose}) => {
console.log("🚀 ~ file: ModalMenuSettings.js:5 ~ ModalMenuSettings ~ isOpen", isOpen)

  const {logout} = useAuth0()

  if(isOpen){
    return (
      <ModalContainer>
          <NavLink to={"/profile"} className='items'>Settings</NavLink>
          <p className="items" onClick={logout}>Log Out</p>
      </ModalContainer>
    )
    
  }else{
    return <></>
  }
}
