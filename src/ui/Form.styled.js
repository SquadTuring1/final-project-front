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
`;

export const Label = styled.label`
  position: absolute;
  top: ${({passPos}) => passPos ? '5.4rem' : '0.5rem'};
  left: 0.7rem;
  color: #a4a4a4;
  font-size: 1rem;
  font-weight: 300;

  &.sign__username{
    top: 5.2rem;
  }

  &.sign__pass{
    top:10rem;
  }

  &.sing__pass--confirm {
    top:14.9rem;
  }
`;
