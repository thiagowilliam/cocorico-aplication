import styled from 'styled-components';
import { FiLogIn } from 'react-icons/fi';
import { shade } from 'polished';

import signInBackgroundImg from '../assets/img/sign-in-background.png';
import iconeCocorico from '../assets/img/icone-cocorico.svg';

export const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  background: url(${iconeCocorico}) no-repeat -25% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  > a {
    color: var(--color-primary);
    display: block;
    text-decoration: none;
    margin-top: 2.4rem;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    transition: all 0.2s;
    &:hover {
      color: ${shade(0.2, '#E9B626')};
    }
  }

  form {
    margin: 8rem 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 2.4rem;
      color: var(--color-text-base);
    }

    a {
      color: var(--color-text-base);
      display: block;
      text-decoration: none;
      margin-top: 2.4rem;
      transition: all 0.2s;

      &:hover {
        color: ${shade(0.2, '#574F1E')};
      }
    }
  }
`;

export const IconLogin = styled(FiLogIn)`
  margin-right: 1.6rem;
`;
export const Background = styled.section`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
