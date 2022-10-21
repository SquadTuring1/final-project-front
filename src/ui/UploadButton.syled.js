import styled from "styled-components";

export const UploadButton = styled.button`
    border: none;
    background-color: #000000; 
    color: white;
    font-size: 1rem;

    @media(min-width: 960px) {
    /* visibility: hidden; */
    background-color: #232323;
    letter-spacing: 1px;
    display: flex;
    border-radius: 12px;
    padding: 7px 30px;
    color: white;
    box-shadow: inset -7px -7px 10px -1px rgba(71,71,71,0.58);

    &:active{
        box-shadow: inset -2px -2px 10px -4px rgba(71,71,71,0.58);
    }
    }
`