import React, {useEffect} from 'react'
import {ModalContainer, ModalBody} from "./ModalCashierStyles"
import { setOpenModal } from "../../../store/actions"
import { useDispatch, useSelector } from 'react-redux'
import {IoCloseCircleOutline} from "react-icons/io5";
import * as ReactDOM from "react-dom"

const ModalCashier = ({children, onClose}) => {
    console.log("🚀 ~ file: ModalCashier.js:9 ~ ModalCashier ~ children", children)
    const dispatch = useDispatch()
    const isModalOpen = useSelector(state=>state.isModalCashierOpen)

    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://sdk.mercadopago.com/js/v2";
        script.id = "MP";
        script.onload = () => {
          var mp = window.MP

        };
        document.head.appendChild(script);
    }, []);
    
    const mp = document.getElementById("MP")

    if(isModalOpen){

        return (
            <ModalContainer className='modal-cashier' >
                <ModalBody>
                    <div className='header-cart'>
                        <div className='button-close' onClick={()=>onClose(isModalOpen)}>{<IoCloseCircleOutline/>}</div>
                        <h1>Adoption Cart</h1>
                    </div>
                    <div className='modal-content'>
                        {children}

                    </div>
                </ModalBody>
            </ModalContainer>
            )
    }
    
}

export const ModalCashierPortal = ({children, onClose}) => {

    return( ReactDOM.createPortal(
        <ModalCashier onClose={onClose}>
            {children}
        </ModalCashier>,document.getElementById("modal")
    )

   
    )
}
