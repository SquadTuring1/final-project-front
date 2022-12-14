import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 21.1rem;
  height: 3.25rem;
  border-radius: 1.06rem;
  border: 0;
  background-color: #ffd600;
  color: #00178e;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  text-decoration: 0;

  &:hover {
    background-color: #ffc700;
    transition: 0.3s all ease;
  }

  &:active {
    transform: scale(0.99);
  }

  &.modify__btn{
    width: 10rem;
    height: 2rem;
    border: 1px solid #ffc700;
    border-radius: .5rem;
    background-color: transparent;
    color:#ffc700;
    font-size:.9rem;
    font-weight: 500;
  }

  &.login__btn{
    margin: 3rem 0 0;
  }

  &.pass__btn {
    width: 10rem;
    height: 2rem;
    margin: 0 0 2rem;
    border: 1px solid #ffc700;
    border-radius: .5rem;
    background-color: transparent;
    color:#ffc700;
    font-size:.9rem;
    font-weight: 500;
  }

  &.profile__upload--btn {
    width: 10rem;
    height: 2rem;
    border: 1px solid #ffc700;
    border-radius: .5rem;
    background-color: transparent;
    color:#ffc700;
    font-size:.9rem;
    font-weight: 500;
  }
`;

export const ButtonGoogle = styled(Button)`
/* background-color: #fff; */
  position: relative;
  overflow: hidden;
  height: 2.5rem;
  width: 16rem;
  z-index: 0;
  font-size:.9rem;

  &::before {
    content: '';
    position: absolute;
    z-index: -2;
    width: 25rem;
    height: 30rem;
    border-radius:1.06rem;
    background-color: #399953;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#399953, #399953),
      linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33),
      linear-gradient(#377af5, #377af5);
    /* animation: rotate 5s linear infinite; */
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - .75rem);
    height: calc(100% - .75rem);
    background: white;
    border-radius: .9rem;
  }
`;
