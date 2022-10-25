import styled from "styled-components";

export const UploadButton = styled.button`
    border: none;
    color: white;
    font-size: 1rem;
    background: rgba(4,8,16,1);
    &:hover{
        cursor: pointer;
    }

    @media(min-width: 960px) {
    /* visibility: hidden; */
    letter-spacing: 1px;
    display: flex;
    border-radius: 12px;
    padding: 7px 30px;
    color: white;
    background: #232323;
    box-shadow: inset -7px -7px 10px -1px rgba(71,71,71,0.58);

    &:active{
        box-shadow: inset -2px -2px 10px -4px rgba(71,71,71,0.58);
        transform: scale(0.99)
    }
    &:hover{
        cursor: context-menu;
    }
    }
`
