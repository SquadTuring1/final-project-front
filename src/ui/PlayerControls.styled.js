import styled from 'styled-components';

export const MainControl = styled.main`
  color:#fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;


  @media (min-width: 960px) {
    justify-content: center;
    align-items: flex-end;
  }
`;

export const ShuffleBtn = styled.button`
  display: none;

  @media (min-width: 960px) {
    display: block;
    margin: 0 1.5rem;
  }
`;

export const RepeatBtn = styled.button`
  display: none;

  @media (min-width: 960px) {
    display: block;
    margin: 0 1.5rem;
  }
`;

export const PlayBtn = styled.button`
  transform: scale(1.6);
  margin: 0 1.5rem;

  @media (min-width: 960px) {
    transform: scale(2)
  }
`