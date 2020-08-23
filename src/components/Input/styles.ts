import styled from 'styled-components';

export const Container = styled.div`
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
