import styled from 'styled-components';

export const PopMenu = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 .8rem ;
  background: #151821;
  font-family: 'Source Sans Pro', sans-serif;
`;

export const PopButton = styled.button``;

export const PopCoverItems = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 8rem;
  border-radius: .3rem;
  color: #fff;
`;

export const PopItems = styled.p`
  display: flex;
  /* justify-content: center; */
  text-align: center;
  width: 100%;
  font-size: 1.1rem;
  margin: 0.25rem;
  padding: 0.1rem 0 .5rem;
  border-bottom: 1px solid #5a5a5a;
  cursor: default;
  user-select: none;

  &:nth-child(2):hover {
    color: #1BC1FF;
  }
  &:nth-child(3) {
    border: none;
    padding: .3rem 0 .3rem .2rem;
    &:hover {
      border-radius: .3rem;
      background-color: #A40000;
      color: #fff;
    }
  }

  &:hover {
    color: #ffd600;
  }
`;
