import React from 'react'
import { CardContainer } from "./styles/CardStyles"
import { setDonationCartElements } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { IoMdAdd, IoIosRemove } from "react-icons/io"

export const CardShoppingCart = () => {

    const dispatch = useDispatch()
    const shoppingCartItems = useSelector(state=>state.itemsCart)
    if(shoppingCartItems.items){
        return (
            <CardContainer>
                {
                    shoppingCartItems?.items.map(item=>{
                        return( 
                        
                            <div className='card-container' key={item._id}>
                                <img src={item.image} />
                                <p>{item.title}</p>
                                <p>{item.quantity}</p>
                                <div className="card-footer">
                                    <a onClick={()=>dispatch(setDonationCartElements(item,"remove"))}  >{<IoIosRemove/>}</a>
                                    <p>{item.amount}</p>
                                    <a onClick={()=>dispatch(setDonationCartElements(item,"add"))}  >{<IoMdAdd/>}</a>
                                </div>
                            </div>
                        )
                    })
                }
            </CardContainer>
        )
        
    }else{
        return (<CardContainer>
            <p>No hay elementos en el carrito</p>
        </CardContainer>)
    }
}
