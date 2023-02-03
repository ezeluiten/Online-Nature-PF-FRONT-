import styled, {} from "styled-components";

export const ProfileSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 40px;
    background-color: transparent;
    align-self: center;
    justify-self: center;
    font-size: 16px;
    border-radius: 50%;
    transform:translateX(-15px);
    cursor:pointer;
    .img-container {
        width: 40px;
        height:40px;
        img {
            border-radius: 50%;
            height:40px;
            width: 40px;
            object-fit:cover;
        }

    }
    .text-container {
        display: flex;
        flex-direction: row;
    }
    &:hover {
        fill: #212529;
        transition: fill 200ms img-container(0.4, 0, 0.2, 1) 0ms;
        box-shadow:  5px 5px 5px 2px rgba(13, 15, 16, 0.7);
        
    }
`;
