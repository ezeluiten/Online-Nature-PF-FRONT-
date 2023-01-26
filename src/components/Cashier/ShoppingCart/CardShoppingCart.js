import React from 'react'
// import { CardContainer } from "./styles/CardStyles"
import style from './CartShopping.module.css'
import { setDonationCartElements } from "../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { IoMdAdd, IoIosRemove } from "react-icons/io"
import { Button } from 'bootstrap';
import { removeItemCart } from '../../../store/actions';
export const CardShoppingCart = () => {


    const dispatch = useDispatch()
    const shoppingCartItems = useSelector(state=>state.itemsCart)

    const useCallBack = () => {

    }
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
                                            <p>Hola humano, dejame vivir en el planeta como tu lo haces. Att: {item.title}</p>
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
                            <button className={style.buttonSubmit}>CHECKOUT</button> 
                        </div>
                    </div>
                    ):
                    (
                        <></>
                    )
                }
                </div>
        )
}
