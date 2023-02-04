import React, { useCallback, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import "./ShoppingCart/styles/mercadopagoStyles.css"


export const PaymentForm = () => {
  
  const prepaymentInfo = useSelector(state=>state.transactionInfo)
  
  useEffect(()=>{
    console.log(prepaymentInfo?.data)
    
    if(prepaymentInfo.data) {
      const script = document.createElement('script') // Here we create the empty script tag
      script.type = 'text/javascript' // The type of the script
      script.src = 'https://sdk.mercadopago.com/js/v2' // The link where the script is hosted
      script.setAttribute('data-preference-id', prepaymentInfo.data) // Here we set its data-preference-id to the ID that the Mercado Pago API gives us
      document.body.appendChild(script) // Here we append it to the body of our page
      
      script.onload = () => {
        console.log("charge the script my bro")
        // Here we create the button, setting the container, our public key and the ID of the preference that Mercado Pago API returns in its response
        const mp = new window.MercadoPago(process.env.REACT_APP_MERCADOPAGO_PUBLIC_KEY, {
          locale: 'es-CO'
        })
  
        // The ".checkout" is the function that creates the connection between the button and the platform
        mp.checkout({
          preference: {
            id: prepaymentInfo.data
          },
          autoOpen: true
          // render: {
          //   container: '.cho-container',
          //   label: 'Pagar'
          // }
        })
      }
    }
  },[prepaymentInfo.data])



  return(
    <div>
      <div className="cho-container"></div>
    </div>
  )


  }