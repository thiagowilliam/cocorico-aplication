import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: rgba(78, 70, 18, 0.6);
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid rgba(78, 70, 18, 0.2);
  color: var(--color-text-secundary);

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: var(--color-primary);
      border-color: var(--color-primary);
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: var(--color-primary);
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--color-text-secundary);
    &::placeholder {
      color: var(--color-text-secundary);
    }
  }

  svg {
    margin-right: 16px;
  }
`;
