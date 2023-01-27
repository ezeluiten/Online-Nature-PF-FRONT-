import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux';

export const PaymentForm = () => {

  const FORM_ID = "form-checkout";
  const prepaymentInfo = useSelector(state=>state.transactionInfo)
  console.log("🚀 ~ file: ModalCashier.js:19 ~ prepaymentInfo ~ prepaymentInfo", prepaymentInfo)

    useEffect(() => {
      if (prepaymentInfo) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src =`https://sandbox.mercadopago.com.co/checkout/v1/redirect?pref_id=${prepaymentInfo}`;
        script.setAttribute('data-preference-id', prepaymentInfo);
        const form = document.getElementById(FORM_ID);
        form.appendChild(script);
        
      }
    }, [prepaymentInfo]);
  
    if(prepaymentInfo){
      
      return (
        <form id={FORM_ID} method={"GET"}>
            
        </form>
      )
    }
}
