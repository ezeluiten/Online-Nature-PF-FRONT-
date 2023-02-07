import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  position: absolute;
  padding: 8px;
  top: 65px;
  right: 20px;
  width: 100px;
  border-radius: 10px;
  box-shadow: 3px 3px 2px 2px #a23131;
  background-color: #568259;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #121619;
  padding-left: 5px;
  padding-right: 5px;
  gap: 8px;
  z-index: 9999;
  .items {
    text-decoration: none;
    color: #121619;
    cursor: pointer;
    border-color: #121619;
    border-bottom: 2px solid transparent;
    /* rgb(18, 22, 25,0.6) rgb(81, 128, 85,1)*/
  }
  .items:hover {
    color: #a8cf45;
    border-color: #568259;
    border-bottom: 2px solid #a23131;
    /* rgb(18, 22, 25,0.6) rgb(81, 128, 85,1)*/
  }
`;
