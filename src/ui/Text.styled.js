import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TextAccount = styled.p`
  margin: ${({ register, orLine }) =>
    register ? '2rem 0' : '1.2rem 0 0' && orLine ? '2rem' : '1.2rem 0 0'};
  font-family: 'Source Sans Pro', sans-serif;
  color: #fff;
  font-size: ${({ orLine }) => (orLine ? '.9rem' : '1.1rem')};
  font-weight: ${({ orLine }) => (orLine ? '200' : '400')};
  text-align: center;
`;

export const TextColor = styled(Link)`
  color: #ffd600;
  font-weight: 600;
  text-decoration: 0;

  &.forgotPass {
    display: flex;
    justify-content: flex-end;
    margin: 0.4rem 0.3rem 0 0;
    font-size: 1.05rem;
    font-weight: 300;
  }
`;

export const TextTerms = styled(TextAccount)`
  width: 85%;
  margin-bottom: 0.9rem;
  font-size: 0.9rem;
  font-weight: 200;
  line-height: 1.4rem;
  text-align: left;
`;

export const TermColor = styled(TextColor)`
  font-size: 0.9rem;
  font-weight: 200;
`;

export const TextRemember = styled(TermColor)`
  margin: 0.5rem 0 0.8rem;
  font-size: 1rem;
  font-weight: 400;
  text-align: right;
`;

export const TitleSign = styled.h2`
  margin-top: ${({ signUp }) => (signUp ? '2rem' : '')};
  padding-bottom: 1rem;
  color: #fff;
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
`;
