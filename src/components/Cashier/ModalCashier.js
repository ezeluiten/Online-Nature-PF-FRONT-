import React from 'react'
import {ModalContainer, ModalBody} from "./ModalCashierStyles"
import { setOpenModal } from "../../store/actions"
import { useDispatch, useSelector } from 'react-redux'
import {IoCloseCircleOutline} from "react-icons/io5";
import * as ReactDOM from "react-dom"


const ModalCashier = ({children, onClose}) => {
    const dispatch = useDispatch()
    const isModalOpen = useSelector(state=>state.isModalOpen)
    console.log("🚀 ~ file: ModalCashier.js:12 ~ ModalCashier ~ isModalOpen", isModalOpen)
    if(isModalOpen){

        return (
            <ModalContainer className='modal-cashier' isOpen={isModalOpen}>
                <ModalBody>
                    <div className='header-cart'>
                        
                    </div>
                    <div className='button-close' onClick={()=>onClose()}>{<IoCloseCircleOutline/>}</div>
                    <div className='modal-content'>
                        {children}

                    </div>
                </ModalBody>
            </ModalContainer>
            )
    }
    
}

export const ModalCashierPortal = ({children, onClose})=>{

    return( ReactDOM.createPortal(
        <ModalCashier onClose={onClose}>
            {children}
        </ModalCashier>,document.getElementById("modal")
    )

   
    )
}
