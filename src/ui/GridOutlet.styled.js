import styled from "styled-components";

export const NavOutlet = styled.section`
  grid-area: navbar;
  border: 1px dotted #fff;
  color: #fff;
`;

export const SideOutlet = styled.section`
  grid-area: sidebar;
  border: 1px dotted #fff;
  color: #fff;
`;  

export const PlayerOutlet = styled.section`
  grid-area: player;
  border: 1px dotted #fff;
  color: #fff;
`;

export const MainOutlet = styled.main`
height: 100%;
  display: grid;
  grid: 
  'navbar navbar' 4.2rem
  'sidebar  .' auto
  'sidebar player ' 7rem/
  20rem auto
  ;
`;