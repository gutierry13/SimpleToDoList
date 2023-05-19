import styled from 'styled-components'
export const LoginContainer = styled.main`
  max-width: 820px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--white);
  margin: 2.4rem auto;
  .login-form {
    width: 30rem;
    height: 29.5rem;
    margin-left: 4rem;
    margin-right: 3rem;
    display: flex;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    background-color: var(--white);
    button {
      background-color: var(--green);
      color: var(--white);
      padding: 6px 38px;
      border-radius: 8px;
      border: none;
      line-height: 1.4;
      cursor: pointer;
      font-weight: bold;
      font-size: 1.2rem;
      transition: all 0.3s;

      &:hover {
        background-color: #2d8a5b;
      }
    }
    .text {
      text-align: center;
      h1 {
        font-size: 2.4rem;
        font-weight: bold;
        line-height: 1.6;
        margin-bottom: 1rem;
      }
      p {
        width: 100%;
        font-size: 1.2rem;
      }
    }
  }
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    span {
      color: var(--green);
      font-weight: 600;
    }
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 18.7rem;
    height: 1.875rem;
  }
`
