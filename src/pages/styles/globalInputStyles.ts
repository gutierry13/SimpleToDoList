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
    padding: .2rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    outline: none;
    border: none;
    background-color: var(--gray-input);

    font-size: 1.2rem;
  }
`
export const CheckBoxContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 2rem;
  input[type='checkbox']{
    margin: 0;
    padding: 0;
    width: 1rem;
    height: 1rem;
    margin-right: 1.2rem;
  }
  label[for='terms']{
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
  }

`