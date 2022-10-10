import styled from 'styled-components';

export const CenterArticle = styled.article`
  position: ${({loginLab}) => loginLab ? 'relative' : ''};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${({loginLab}) => loginLab ? '' : '4rem'};
`;

