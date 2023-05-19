import styled from 'styled-components'
export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  input[type='checkbox']:checked + p,
  input[type='checkbox']:checked + p + svg {
    text-decoration: line-through;
    opacity: 0.3;
  }
  input {
    appearance: none;
    margin: 0;
    width: 1.2rem;
    height: 1.2rem;
    border: 1px solid #ccc;
    border-radius: 25%;
    display: grid;
    place-content: center;
    &:checked {
      &::before {
        transform: scale(1);
      }
    }
    &::before {
      content: '';
      width: 0.85em;
      height: 0.85em;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em green;
      transform-origin: bottom left;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }
  }
`
