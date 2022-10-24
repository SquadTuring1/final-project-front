import styled from 'styled-components';

export const MainNav = styled.main`
  background-color: #000;
`;

export const NavContent = styled.section`
  /* text-align: right; */
  /* position: relative; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AvatarContent = styled.article`
  position: relative;
`

export const Avatar = styled.img`
  border-radius: 2rem;
  height: 2.3rem;
  width: 2.3rem;
  margin: 0 1rem 0 0;
  object-fit: cover;
`;
export const ButtonAvatar = styled.button`
  /* position: absolute; */
  margin: .7rem 1.6rem .3rem 0;
  height: 3.2rem;
  width: 3.2rem;
  background: 0;
`;

export const GreenDot = styled.div`
  position: absolute;
  top: 1.4rem;
  right: 1.6rem;
  height: 0.9rem;
  width: 0.9rem;
  border: 3px solid #000;
  border-radius: 0.7rem;
  background-color: #00c01f;
`;