import styled from 'styled-components';

export const Input = styled.input`
  width: 21.1rem;
  height: 3.25rem;
  padding: .6rem .75rem 0 .75rem;
  border-radius: 1.06rem;
  border: 0;
  outline: 0;
  background-color: rgba(32, 32, 32, 0.7);
  color: #fff;
  font-size: 1rem;

  &:focus {
    /* border: 1px solid #EF5656;
    box-shadow: 0px 0px 10px 0px #EF5656; */
    border: 2px solid #FFD600;
    box-shadow: 0px 0px 10px -1px #FFD600;
  }

  
  &.username__input, &.email__input {
    background: 0;
    user-select:none;
  }

  &.info__user--input:disabled {
    background: 0;
  }

`;

export const Label = styled.label`
  position: absolute;
  top: ${({passPos}) => passPos ? '5.4rem' : '0.5rem'};
  left: 0.7rem;
  color: #a4a4a4;
  font-size: 1rem;
  font-weight: 300;

  /* &.sign__username{
    top: 4.2rem;
    left: 3.8rem;
  }

  &.sign__pass{
    top:10rem;
    left: 3.8rem;
  }

  &.sing__pass--confirm {
    top:14.9rem;
    left: 3.8rem;
  }

  &.username__profile {
    top: 6.4rem;
    left: 3.8rem;
  }

  &.email__profile {
    top: 8rem;
    left: 3.8rem;
  }

  &.name__profile {
    top: 11.3rem;
    left: 3.8rem;
  }

  &.lastname__profile {
    top: 16.1rem;
    left: 3.8rem;
  }

  &.pass__profile {
    top: 26.9rem;
    left: 3.8rem;
  }

  &.conf__pass-profile {
    top: 31.7rem;
    left: 3.8rem;
  } */
`;
