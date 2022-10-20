import styled from "styled-components";
import { RiMore2Fill } from 'react-icons/ri'


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

export const CoverMenuIcon = styled(RiMore2Fill)`
  position: absolute;
  transform: scale(1.3);
  top: 9rem;
  left: 7.4rem;
`;