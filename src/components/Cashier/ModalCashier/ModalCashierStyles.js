import styled from "styled-components";



export const ModalContainer = styled.div`
   background-color:rgba(255,255,255, .3);
   backdrop-filter:blur(3px);
   position: fixed;
   top:0;
   left:0;
   width:100vw;
   z-index: 9999;

   /* box-shadow:  */
   /* overflow: auto; */
`
export const ModalBody = styled.div`
  display:flex;
  flex-direction:column;
  background-color:#6d9970;
  height:100vh;
  width:500px;
  border-radius: 0px 20px 20px 0px;
  padding:15px;
  width: 50%;
  box-shadow: 10px 5px 5px 0px rgb(91 97 86);

  
  .header-cart{
    position:relative;
    padding-left:55px;
    padding-bottom:2rem;
    .button-close{
      position:absolute;
      top:-14px;
      left:0px;
      width:40px;
      height:40px;
      font-size:40px;
      color:white;
      cursor: pointer;
    }

  }
  .modal-content{
    width:100%;
    height:70%;
    background-color:#6d9970;
    backdrop-filter:blur(2px);
    
  }
  

  @media (max-width: 600px) {
    width:350px;

    .buttonEmpty {
      width: auto;
    }
  }

`
