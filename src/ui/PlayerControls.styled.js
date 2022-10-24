import styled from 'styled-components';

export const MainControl = styled.main`
  color:#fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  margin: .8rem 1.5rem 0 0;

  @media (min-width: 960px) {
    justify-content: center;
    align-items: flex-end;
    margin: 0;
  }
`;

export const ShuffleBtn = styled.button`
  display: none;
  font-weight: ${props => props.selected && 'bold'};
  transform:  ${props => props.selected && 'scale(1.5)'};
  color:  ${props => props.selected && 'rgb(255,215,3)'};

  &:hover {
    font-weight: bold;
    transform: scale(1.5);
    color: rgb(255,215,3);
  }

  @media (min-width: 960px) {
    display: block;
    margin: 0 1.5rem;
  }
`;

export const RepeatBtn = styled.button`
  display: none;
  font-weight: ${props => props.selected && 'bold'};
  transform:  ${props => props.selected && 'scale(1.5)'};
  color:  ${props => props.selected && 'rgb(255,215,3)'};

  &:hover {
    font-weight: bold;
    transform: scale(1.5);
    color: rgb(255,215,3);
  }

  @media (min-width: 960px) {
    display: block;
    margin: 0 1.5rem;
  }
`;

export const PlayBtn = styled.button`
  transform: scale(1.6);
  margin: 0 1.5rem;
  font-weight: ${props => props.selected && 'bold'};
  transform:  ${props => props.selected && 'scale(3)'};
  color:  ${props => props.selected && 'rgb(255,215,3)'};

  &:hover {
    font-weight: bold;
    transform: scale(3);
    color: rgb(255,215,3);
  }

  @media (min-width: 960px) {
    transform: scale(2)
  }
`;

export const ChangeSongBtn = styled.button`
  display: block;

  &:hover {
    font-weight: bold;
    transform: scale(1.5);
    color: rgb(255,215,3);
  }

  @media (min-width: 960px) {
    display: block;
    margin: 0 1.5rem;
  }
`;



