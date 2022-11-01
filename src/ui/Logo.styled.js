import styled from "styled-components";

export const Logo = styled.img`
  margin: ${({sign}) => (sign ? '1rem 0 4rem' : '2rem 0 0')};
  height: 13rem;

  &.logo_profile {
    height: 1.9rem;
    margin: 0 0 0 1rem;
    padding: .5rem 0 0 0;
    
    
    @media(min-width: 960px) {
      height: 2.6rem;
      margin: 0 0 0 4.4rem;


    }
  }
  
  &.logo__navbar {
    height: 3.2rem;
    margin: 0 0 0 .2rem;
    padding: .5rem 0 0 1rem;

        @media(min-width: 960px) {
      height: 3.2rem;
      margin: 0 0 0 2.3rem;
    }
  }

  &.logo__home {
    height: 9rem;
     @media(min-width: 960px){
      height: 13rem;
      margin: 0 0 0 5.8rem;
     }
  }

  &.logo__login {
    
    height: 9rem;
    @media(min-width: 960px){
      height: 13rem;
      margin: 0 0 3rem 2rem;
     }
  }
`;