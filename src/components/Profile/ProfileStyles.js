import styled, {} from "styled-components";

export const ProfileSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40px;
    height: 100%;
    transform: translateY(-5px);
    background-color: transparent;
    align-content: center;
    justify-items: center;
    font-size: 16px;
    cursor:pointer;
    .img-container {
        width: 40px;
        height:40px;
        img {
            height:40px;
            width: 40px;
            border-radius: 50%;
            object-fit:cover;
        }

    }
    .text-container {
        display: flex;
        flex-direction: row;
    }
    &:hover {
        transform:translateY(-5px);
        transform:scale(1.15);
        /* rgb(18, 22, 25,0.6) rgb(81, 128, 85,1)*/
    }
`;
