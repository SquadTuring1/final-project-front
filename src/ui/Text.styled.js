import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RiPlayCircleLine } from 'react-icons/ri';


export const TextAccount = styled.p`
  margin: ${({ register, orLine }) =>
    register ? '2rem 0' : '1.2rem 0 0' && orLine ? '2rem' : '1.2rem 0 0'};
  font-family: 'Source Sans Pro', sans-serif;
  color: #fff;
  font-size: ${({ orLine }) => (orLine ? '.9rem' : '1.1rem')};
  font-weight: ${({ orLine }) => (orLine ? '200' : '400')};
  text-align: center;
  cursor: ${({ reset }) => reset && 'pointer'};
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
  color: #eee;
  font-size: ${({uploadModal}) => (uploadModal ? '2.7rem' : '2.5rem')};
  font-weight: 600;
  text-align: center;
`;

export const TitleH2 = styled.h2`
  margin: 1rem 0 0;
  color: #eee;
  font-size: 2.3rem;
  font-weight: 600;

  &.genre__dashboard--h2{
    width: 10rem;
    padding: 0 0 .5rem 0;
    margin: 1rem 0 0 1rem;
    border-bottom: 1px solid #e5e5e5;
    font-size: 1.5rem;
    text-shadow: 2px 2px 11px #eee;
  }

  &.songs__dashboard--h2{
    width: 10rem;
    padding: 0 0 .5rem 0;
    margin: 1rem 0 1rem 1rem;
    border-bottom: 1px solid #e5e5e5;
    font-size: 1.5rem;
    text-shadow: 2px 2px 11px #eee;
  }
  &.playlist__dashboard--h2{
    width: 10rem;
    padding: 0 0 .5rem 0;
    margin: 1rem 0 0 1rem;
    border-bottom: 1px solid #e5e5e5;
    font-size: 1.5rem;
    text-shadow: 2px 2px 11px #eee;
  }
`;

export const TitleP = styled.p`
  color: #eee;
  font-size: 1rem;
  text-align: left;

  &.change__pass {
    display: flex;
  }
`;


export const ResponseMessage = styled.p`
  font-size: 1rem;
  font-weight: 400; 
  

  &.success {
    color: yellow;
  }

  &.error {
    color: #FF63D3;
  }


  &.login {
    position: relative;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    bottom: 2.75rem;
    right: 1rem;
}`


