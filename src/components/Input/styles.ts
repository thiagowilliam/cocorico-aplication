import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
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
    props.isErrored &&
    css`
      border-color: var(--color-error);
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: var(--color-text-base);
      border-color: var(--color-text-base);
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: var(--color-text-base);
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
    flex-shrink: 0;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: var(--color-error);
    color: var(--color-white);

    &::before {
      border-color: var(--color-error) transparent;
    }
  }
`;
