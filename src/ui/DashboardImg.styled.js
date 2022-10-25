import styled from "styled-components";

export const CoverSong = styled.img`
  height: 7.5rem;
  width: 7.5rem;
  margin: 0 0 .4rem;
  border-radius: 0.3rem;

  &.sidebar__desktop--cover {
    height: 14rem;
    width: 14rem;
    margin: 0 0 .7rem;
  }

  &:hover {
    transform: scale(1.03);
    transition: transform .7s;
  }
`;

export const CoverMenuIcon = styled.article`
  position: absolute;
  transform: scale(1.3);
  top: 8.5rem;
  left: 7.5rem;
`;