import styled from "styled-components";

export const SideMenu = styled.main`
  display: flex;
  justify-content:center;
  align-items: center;
  height: 100%;
  margin: 0 0 0 1.5rem;

  &:hover{
    color: yellow;
  }


  @media(min-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const SideMenuItems = styled.article`
display: flex;
text-decoration: none;
font-size: 1.1rem;
color: pink;
`;