import styled from "styled-components";

export const ViewSelectedContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    gap:20px;
`

export const CardsContainer = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    gap:30px;
    width:100%;
    color:#121619;
    padding:20px;
    background-color:#568259;
    border-radius:20px;
    .title-welcome{
        width:100%;
    }
`
export const FavoriteCard = styled.div`
    display:flex;
    flex-direction:column;
    justify-items:center;
    align-items:center;
    width:200px;
    height:250px;
    font-size:12px;
    gap:5px;
    box-shadow:6px 6px 5px 2px #3d2020;
    background-color: #556e56;
    border-radius: 1rem ;
    overflow:hidden;
    line-height:15px;
    .button-container{
        position:relative;
        width:100%;
    }
    .info-title{
        border-radius:10px;
        padding:4px;
        position:absolute;
        top:-16px;
        right:5px;
        background-color:#a8cf45;
        border-style:none;
        
    }
    .image-container{
        width:100%;
        height:140px;
        img{
            width:100%;
            height:140px;
            object-fit:cover;
            
        }
    }
    .info-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding:10px;
        width: 100%;
        height:100%;
    }
`