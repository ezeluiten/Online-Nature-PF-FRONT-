
import styled from "styled-components";



export const FiltersContainer = styled.div`
    
`

export const StoreCampaingContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-items:center;
    gap:20px;
    padding-left: 140px;
    padding-right: 140px;
    background-color:#eeeeee00;
    font-family: "Poppins", sans-serif;
    @media (max-width: 600px) {
        width:100%;
        padding-left: 20px;
        padding-right: 20px;
    }

`
export const Card = styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    width: 350px;
    height: 400px;
    background-color:white;
    border-style: solid;
    border-width:0.3px;
    border-radius:20px;
    overflow:hidden;
    border-color:#dee2e6;
    h3{
        font-size:1.5rem
        
    }
    img{
        object-fit:cover;
        width:100%;
        height:192px
    }
    @media (max-width: 600px) {
        width:100%
    }
   
`
export const CardLabel = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    padding: 0px 20px;
    .donate-button{
        width:120px;
        height:50px;
        align-self:center;
        justify-self:flex-end;
        border-style:none;
        background-color:#568259;
        color:white;
        cursor: pointer;
        border-radius:5px;
        
    }
`
export const CardContainer = styled.div`
   display:flex;
   flex-direction:row;
   gap:50px;
   flex-wrap:wrap;
   justify-content:center;
   width:100%;


`
