import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 18rem;
    background: var(--color-primary);
    padding: 0.8rem;
    border-radius: 0.4rem;
    font-size: 1.4rem;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    color: var(--color-text-base);

    &::before {
      content: '';
      border-style: solid;
      border-color: var(--color-primary) transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
