import React, { useState, useEffect } from 'react'
// import { CardContainer } from "./styles/CardStyles"
import style from './CartShopping.module.css'
import { initCheckOut, setDonationCartElements } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { IoMdAdd, IoIosRemove } from "react-icons/io"
import { Button } from 'bootstrap';
import { removeItemCart } from '../../../store/actions';  
import { getCatalogue } from "../../../store/actions"
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import { PaymentForm } from '../PaymentForm';


export const CardShoppingCart = () => {


    useEffect(()=>{
        getCatalogue()
    },[])
    
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const shoppingCartItems = useSelector(state=>state.itemsCart)
    
        return (
                <div className={style.containerCart}>
                {
                    shoppingCartItems.items && shoppingCartItems.items.length > 0? 
                    (
                        shoppingCartItems?.items.map(item=>{
                            return( 
                                
                                <div className={style.cardContainer} key={item._id}>
                                    <div className={style.imgContainer}>
                                        <img src={item.image} />
                                    </div>
                                    <div className={style.infoContainer}>
                                        <div className={style.infoContainerChild}>
                                            <div>
                                                <p>{item.title}</p> 
                                            </div>
                                            <button 
                                            className={style.btn}
                                            onClick={()=>dispatch(setDonationCartElements(item,"delete"))}
                                            
                                            >X</button>
                                        </div>
                                            <p>{item.description.substr(0,70)+ "..."}</p>
                                        <div>
                                            <div className={style.containerQuantity}>
                                                <div className={style.containerQuantityChild}>
                                                    <a onClick={()=>dispatch(setDonationCartElements(item,"decrease"))}  >{<IoIosRemove/>}</a>
                                                        <p>{item.quantity}</p>
                                                    <a onClick={()=>dispatch(setDonationCartElements(item,"increase"))}  >{<IoMdAdd/>}</a>
                                                </div>
                                                <div className={style.containerAmount}>
                                                    <p>$ {item.amount}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                    ) : (
                        <div className={style.containerCart}>
                            <div className={style.noCards}>
                                <p>You have not added adoptions to the cart 🛒</p>
                            </div>
                        </div>
                    )
                }
                {
                    shoppingCartItems.items && shoppingCartItems.items.length > 0?
                    (
                        <div className={style.containerSubmit}>
                            <div className={style.subtotal}>
                                subtotal <span>$ {shoppingCartItems.totalAmount}</span>
                            </div>
                        <div> 
                            <button className={style.buttonSubmit} onClick={
                                ()=>{
                                    dispatch(initCheckOut())
                                }
                                }>CHECKOUT</button> 
                        </div>
                    </div>
                    ):
                    (
                        <></>
                    )

                }
                    <PaymentForm/>
                </div>
        )
}
