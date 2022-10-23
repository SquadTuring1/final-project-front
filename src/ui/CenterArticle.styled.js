import styled from 'styled-components';

export const CenterArticle = styled.article`
  position: ${({loginLab}) => loginLab ? 'relative' : ''};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${({loginLab}) => loginLab ? '' : '4rem'};

  &.button__profile--container{
    display: flex;
    justify-content:center;
  }
`;

export const CenterProfile = styled(CenterArticle)`
  margin-top: -3rem;
  height:50vh;
  align-items: center;

  &.button {
    
    height: 100%;
  }
`