import styled from "styled-components";

export const Logo = styled.img`
  margin-top: ${({sign}) => (sign ? '1rem' : '2rem')};

  &.logo_profile {
    height: 1.5rem;
    margin: 0 0 0 1rem;
    padding: .5rem 0 0 0;

    @media(min-width: 960px) {
      height: 2.2rem;
      margin: 0 0 0 4.4rem;
    }
  }
`;