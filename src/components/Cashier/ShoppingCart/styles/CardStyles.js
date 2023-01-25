import styled from "styled-components";

export const CardContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    color:white;
    gap:20px;
    overflow-x:hidden;
    overflow:hidden;
    overflow-y:auto;

    .card-container{
        display:flex;
        flex-direction:column;
        width:100%;
        height:100%;
        border-style:solid;
        border-width:0.3px;
        border-radius:5px;
        
        img{
            object-fit:contain;
            width:100px;
        }
        .card-footer{
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
        }
        a{
            cursor: pointer;
            width:35px;
            border-style:solid;
            border-width:0.3px;
        }
    }
`