import React, { useState } from 'react'
import Navbar from '../../NavBar/NavBar'
import { ProfileContainer, ProfileContainerView } from './ProfileSettingsStyles'
import zorro from "../../../imagenes/zorro.jpg" 
import sunrise from "../../../imagenes/sunrise.jpg" 
import { ViewSelected } from './ViewSelected'

export const ProfileSettings = () => {

    const [ isOpen, setIsOpen ] = useState({
        open:false,
        view:""
    })
    console.log("🚀 ~ file: ProfileSettings.js:14 ~ ProfileSettings ~ isOpen", isOpen)

    const handleToggle = ( view ) => {
        console.log("🚀 ~ file: ProfileSettings.js:16 ~ handleToggle ~ view", view)
        const open = isOpen.open
        setIsOpen({
            open:!open,
            view
        })
    }

  return (
    <ProfileContainerView>
        {/* <img src={zorro} style={{
            "position":"fixed"
        }}/> */}
        <Navbar/>
        <ProfileContainer>
            <div className='settings-panel-options-picker'>
                <p onClick={()=>handleToggle("edit")}>Edit Account Information</p>
                <p onClick={()=>handleToggle("family")}>Family members preserved</p>
                <p onClick={()=>handleToggle("favorites")}>Favorite adoption prospects</p>
            </div>
            <ViewSelected className='active-view' isOpen={isOpen}>
                Abierto
            </ViewSelected>
        </ProfileContainer>
    </ProfileContainerView>
  )
}
