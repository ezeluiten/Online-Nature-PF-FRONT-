import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux';
import * as ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import "./ShoppingCart/styles/mercadopagoStyles.css"


export const PaymentForm = () => {
  
  const FORM_ID = "form-checkout";
  const prepaymentInfo = useSelector(state=>state.transactionInfo)
  console.log("🚀 ~ file: ModalCashier.js:19 ~ prepaymentInfo ~ prepaymentInfo", prepaymentInfo)

  
  const injectFormMeli = ()=>{

    const containerHtml = document.createElement("div") 

    const htmlMeli = `
      <form id="form-checkout">
        <div id="form-checkout__cardNumber" class="container"></div>
        <div id="form-checkout__expirationDate" class="container"></div>
        <div id="form-checkout__securityCode" class="container"></div>
        <input type="text" id="form-checkout__cardholderName" />
        <select id="form-checkout__issuer"></select>
        <select id="form-checkout__installments"></select>
        <select id="form-checkout__identificationType"></select>
        <input type="text" id="form-checkout__identificationNumber" />
        <input type="email" id="form-checkout__cardholderEmail" />

        <button type="submit" id="form-checkout__submit">Init payment process</button>
        <progress value="0" class="progress-bar">Carregando...</progress>
      </form>
    `
    
    containerHtml.innerHTML=htmlMeli
    document.getElementById("modal").appendChild(containerHtml).style.display = "none"

    

  }

    useEffect(()=>{
      injectFormMeli()
    }, [])

    useEffect(() => {
      if (prepaymentInfo) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src =`https://www.mercadopago.com.co/integrations/v1/web-payment-checkout.js`;
        script.setAttribute('data-preference-id', prepaymentInfo.data);
        console.log(prepaymentInfo.data, "token id")
        const form = document.getElementById(FORM_ID);
        form.appendChild(script);
        document.getElementById("modal").style.display = "block"
      }
    }, [prepaymentInfo]);
  
    if(prepaymentInfo.data){
      
      return (
        <form id={FORM_ID} method={"GET"}>
            
        </form>
      )
    }
}
