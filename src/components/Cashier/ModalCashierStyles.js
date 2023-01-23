import styled from "styled-components";



export const ModalContainer = styled.div`
   background-color:rgba(255,255,255, .3);
   backdrop-filter:blur(2px);
   position: fixed;
   top:0;
   left:0;
   width:100vw;
   z-index: 9999;
`
export const ModalBody = styled.div`
  background-color:#6d9970;
  height:100vh;
  width:500px;
  border-radius: 0px 20px 20px 0px;
  .button-close{
    position:relative;
    top:0;
    right:0;
    width:40px;
    height:40px;
    font-size:40px;
    color:white;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    width:350px;
  }

`
