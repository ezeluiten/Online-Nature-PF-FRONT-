import React, { useCallback, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import "./ShoppingCart/styles/mercadopagoStyles.css"


export const PaymentForm = () => {
  
  const FORM_ID = "form-checkout";
  const prepaymentInfo = useSelector(state=>state.transactionInfo)
  console.log(prepaymentInfo?.data)
  const mpContext = useRef({})

  useEffect(()=>{
    // const mp = new window.MercadoPago(process.env.REACT_APP_MERCADOPAGO_PUBLIC_KEY, {
    //   locale: 'es-CO'
    // });
    // mpContext.current = mp

    console.log("my id >>>>>>>><", prepaymentInfo.data)
    if(prepaymentInfo.data) {
      const script = document.createElement('script') // Here we create the empty script tag
      script.type = 'text/javascript' // The type of the script
      script.src = 'https://sdk.mercadopago.com/js/v2' // The link where the script is hosted
      script.setAttribute('data-preference-id', prepaymentInfo.data) // Here we set its data-preference-id to the ID that the Mercado Pago API gives us
      document.body.appendChild(script) // Here we append it to the body of our page
      
      console.log("charge the script my bro")
      // Here we create the button, setting the container, our public key and the ID of the preference that Mercado Pago API returns in its response
      const mp = new window.MercadoPago(process.env.REACT_APP_MERCADOPAGO_PUBLIC_KEY, {
        locale: 'es-AR'
      })

      // The ".checkout" is the function that creates the connection between the button and the platform
      mp.checkout({
        preference: {
          id: prepaymentInfo.data
        },
        render: {
          container: '.cho-container',
          label: 'Pagar'
        }
      })
    }
  },[prepaymentInfo.data])


  // const handleClick = () => {
  //   console.log(prepaymentInfo)
  //   if(mpContext.current){
  //       mpContext.current.checkout({
  //         preference: {
  //           id: prepaymentInfo.data
  //         },
  //         render: {
  //           container: '.cho-container',
  //           label: 'Pagar',
  //         }
  //       });
  //   }
  // } 

  return(
    <div>
      {/* <button onClick={handleClick}>CHECKOUT</button> */}
      <div className="cho-container"></div>
      {/* <div style={{height:"50px", width:"100px", background: "red"}} id="prueba-mp"></div> */}
    </div>
  )



  // const injectFormMeli = ()=>{

  //   const containerHtml = document.createElement("div") 

  //   const htmlMeli = `
  //     <form id="form-checkout">
  //       <div id="form-checkout__cardNumber" class="container"></div>
  //       <div id="form-checkout__expirationDate" class="container"></div>
  //       <div id="form-checkout__securityCode" class="container"></div>
  //       <input type="text" id="form-checkout__cardholderName" />
  //       <select id="form-checkout__issuer"></select>
  //       <select id="form-checkout__installments"></select>
  //       <select id="form-checkout__identificationType"></select>
  //       <input type="text" id="form-checkout__identificationNumber" />
  //       <input type="email" id="form-checkout__cardholderEmail" />

  //       <button type="submit" id="form-checkout__submit">Init payment process</button>
  //       <progress value="0" class="progress-bar">Cargando...</progress>
  //     </form>
  //   `
  //   containerHtml.innerHTML=htmlMeli
  //   document.getElementById("modal").appendChild(containerHtml).style.display = "none"

  // }

  //   useEffect(()=>{
  //     injectFormMeli()
  //   }, [])

  //   useEffect(() => {
  //     console.log("execution of this")
  //     console.log(prepaymentInfo.data)
  //     if (prepaymentInfo) {
  //       const script = document.createElement('script');
  //       script.type = 'text/javascript';
  //       script.async = true;
  //       script.src =`https://www.mercadopago.com.co/integrations/v1/web-payment-checkout.js`;
  //       script.setAttribute('data-preference-id', prepaymentInfo.data);
  //       const form = document.getElementById(FORM_ID);
  //       form.appendChild(script);
  //       document.getElementById("modal").style.display = "block"
  //     }
  //   }, [prepaymentInfo]);
  
  //   if(prepaymentInfo.data){
      
  //     return (
  //       <form id={FORM_ID} method={"GET"}>
  //       </form>
  //     )
  //   }
}
