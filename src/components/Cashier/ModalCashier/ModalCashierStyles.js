import styled from "styled-components";



export const ModalContainer = styled.div`
   background-color:rgba(255,255,255, .3);
   backdrop-filter:blur(3px);
   position: fixed;
   top:0;
   left:0;
   width:100vw;
   z-index: 9999;
`
export const ModalBody = styled.div`
  display:flex;
  flex-direction:column;
  background-color:#6d9970;
  height:100vh;
  width:500px;
  border-radius: 0px 20px 20px 0px;
  padding:15px;
  .header-cart{
    position:relative;
    padding-left:55px;
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
    height:80%;
    background-color:#6d9970;
    backdrop-filter:blur(2px);
    
  }
  

  @media (max-width: 600px) {
    width:350px;
  }

`
