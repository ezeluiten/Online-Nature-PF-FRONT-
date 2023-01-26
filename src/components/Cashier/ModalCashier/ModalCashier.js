import React, {useEffect} from 'react'
import {ModalContainer, ModalBody} from "./ModalCashierStyles"
import { setDonationCartElements, setOpenModal } from "../../../store/actions"
import { useDispatch, useSelector } from 'react-redux'
import {IoCloseCircleOutline} from "react-icons/io5";
import * as ReactDOM from "react-dom"
import style from '../ShoppingCart/CartShopping.module.css'

const ModalCashier = ({children, onClose}) => {

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

    const catalogue = useSelector((state) => state.donationCatalogue);

    const handleSelectChange = (itemSelected)=>{
        const id = itemSelected.target.value
        const item = catalogue.find(e=> e._id == id )
        dispatch(setDonationCartElements(item,"increase"))
    }   
    


    if(isModalOpen){

        return (
            <ModalContainer className='modal-cashier' >
                <ModalBody>
                    <div className='header-cart'>
                        <div className='button-close' onClick={()=>onClose(isModalOpen)}>{<IoCloseCircleOutline/>}</div>
                        <h1>Adoption Cart</h1>
                        <div className={style.selectContainer}>
                            <select
                                className={style.selectAnimal}
                                onChange={handleSelectChange}
                            >
                            {
                                catalogue?.map(element=>{
                                    return(
                                        <option value={element._id}>{element.title}</option>

                                    )
                                })
                            }
                            </select>

                            <button className={style.buttonSubmit} onClick={()=> dispatch(setDonationCartElements({},"getCartEmpty"))}>Get cart empty</button> 

                        </div>
                        
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
