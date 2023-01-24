import styled from "styled-components";
import image from "../../imagenes/logo2.png"


export const NavBarContainer = styled.div`
    .container{
        background-color: #568259;
        position: fixed;
        right: 0;
        margin-top: 15px;
        padding-right: 10px;
        border-bottom-left-radius: 50px;
        border-top-left-radius: 50px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 50px;
        justify-content: space-around;
        align-items: center;
        z-index: 10;
        padding: 5px;
        
    }
    .navBtn {
        padding: 5px;
        cursor: pointer;
        background: transparent;
        border: none;
        outline: none;
        /* color: var(red); */
        visibility: hidden;
        opacity: 0;
        font-size: 1.8rem;
    }
    
    
    .logo {
        height: 50px;
        width: 50px;
        background-image: url(${image});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
    }
        .links {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
        }

    .link {
    background-color: transparent;
    border-color: transparent;
    text-decoration: none;
    color: #121619;
    cursor: pointer;
    font-size: 1em;
    transition-duration: all 1s;
    }

    .link:hover {
    transition-duration: all 1s;
    color: #a8cf45;
    text-decoration: none;
    }

    .navActivety {
    transition-duration: 1s;
    color: #a8cf45;
    text-decoration: none;
    }

    .cart {
    width: 30px;
    height: 30px;
    }

    .cart:hover {
    transition-duration: all 1s;
    color: #a8cf45;
    }

    .button {
    color: #fffbff;
    border-radius: 10px;
    padding: 5px 15px 5px 15px;
    background-color: #ea4335;
    border-color: transparent;
    transition: all 1s;
    }

    .button:hover {
    transition: all 1s;
    background-color: hsla(5, 81%, 56%, 0.8);
    }

    @media only screen and (max-width: 600px) {
        .navBtn{
            visibility: visible;
            opacity: 1;
        }
        
        .container {
            visibility: visible;
            opacity: 1;
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            background-color: #568259;
            transition: 1s;
            transform: translateY(-100vh);
            transform: none;
        }
        
        
        .links{
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            background-color: #568259;
            transition: 1s;
            transform: translateY(-100vh);
        }

        .responsiveNav{
            transform: none;
        }

        .links{
            position: absolute;
            top: 2rem;
            right: 2rem;
            font-size: 1.5rem;
        }

        .navCloseBtn {
            position: absolute;
            top: 2rem;
            right: 2rem;
        }
        
        .a {
            font-size: 1.5rem;
        }
    }
`