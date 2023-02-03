import styled, {keyframes , movimentBelow} from "styled-components";
import zorro from "../../../imagenes/zorro.jpg" 
import sunrise from "../../../imagenes/sunrise.jpg" 

export const ProfileContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-content:flex-start;
    margin-top:200px;
    z-index:999;
    width:100%;
    height:100%;
    gap:40px;
    max-width:1400px;
    position: relative; 
    .settings-panel-options-picker{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        background-color:#568259;
        width:400px;
        height:200px;
        border-radius:10px;
        padding:10px;
        box-shadow:6px 6px 5px 2px #3d2020;

    }
    animation: movementBelow 1.5s linear ease-in;
     @keyframes movementBelow {
        from {
        transform: translateX(-100%);
        opacity: 0;
        };
        to{
            transform: translateX(0);
            opacity: 1;
        };
    }
    .active-view{
        background-color: #568259;
        width:100%;
        height:100%;
        border-radius:10px;
        padding:10px;
        box-shadow:6px 6px 5px 2px #3d2020;
    }
    .p-settings{
       cursor:pointer;
    }
    
`;
export const ProfileContainerView = styled.div`
    display:flex;
    flex-direction:column;
    justify-items:center;
    align-items:center;
    box-sizing:border-box;
    background-image:url(${zorro});
    background-color:#02010000;
    background-origin: border-box;
    background-repeat: no-repeat;
    background-size:cover;
    padding:40px;
    width:100%;
    min-height:100vh;
    max-height: 100%;

`;
