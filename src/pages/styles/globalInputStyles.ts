import styled from "styled-components";
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  label{
    font-size: 1.2rem;
    line-height: 1.5;
  }
  input{
    margin-bottom: 1rem;
    border-radius: 8px;
    outline: none;
    border: none;
    background-color: var(--gray-input);
    width: 18.7rem;
    height: 1.875rem;
    font-size: 1rem;
  }

`