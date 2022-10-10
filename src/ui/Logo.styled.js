import styled from "styled-components";

export const Logo = styled.img`
  margin-top: ${({sign}) => (sign ? '1rem' : '2rem')};
`;