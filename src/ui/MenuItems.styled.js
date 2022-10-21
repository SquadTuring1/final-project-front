import styled from "styled-components";

export const SideMenu = styled.main`
  display: flex;
  justify-content:center;
  align-items: center;
  height: 100%;
  /* margin: 0 0 0 1.5rem; */

  &:hover{
    color: yellow;
  }


  @media(min-width: 960px) {
    margin: 0 0 0 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const SideMenuItems = styled.article`
display: flex;
text-decoration: none;
font-size: 1rem;
color: white;
font-family: 'Source Sans Pro', sans-serif;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin: 0.5rem;

@media(min-width: 960px) {
    /* border: red 1px solid; */
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
`;