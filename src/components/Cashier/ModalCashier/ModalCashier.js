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

    const catalogue = useSelector((state) => state.donationCatalogue);
    const shoppingCartItems = useSelector(state=>state.itemsCart)

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
                        <h1 className='h1-name'>Adoption Cart</h1>
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
                            {
                                shoppingCartItems.items?.length > 0 && window.screen.width > 600 ?  <button className={style.buttonEmpty} onClick={()=> dispatch(setDonationCartElements({},"getCartEmpty"))}>Get Cart Empty</button> :  <button className={style.buttonEmpty} onClick={()=> dispatch(setDonationCartElements({},"getCartEmpty"))}>Empty</button>  

                            }

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
