import styled from 'styled-components';

export const ProgressBar = styled.input`
margin: 0 auto;
  width:100%;


&:focus {
}

&::-webkit-slider-runnable-track {
  
}

&::-webkit-slider-thumb {
  visibility: hidden;
}

&:focus::-webkit-slider-runnable-track {
}

@media (min-width: 960px) {
  width: 70.5%;
  display: flex;
  justify-content: center;
  padding: .7rem 0 0;
}
`;