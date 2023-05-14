import styled from "styled-components";
export const ForgotPasswordContainer = styled.section`
  max-width: 560px;
  width: 100%;
  height: 420px;
  background-color: var(--white);
  border-radius: 20px;
  margin:5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  margin-bottom: 2rem;
  .text{
    text-align: center;
    h1{
      font-size: 2rem;
      line-height: 1.5;
      margin-bottom: .4rem;
    }
    p{
      font-size: 1rem;
      line-height: 1.4;
    }
  }
  div{
    width: 100%;
    label{
      font-size: 1.2rem;
    }
    input{
    width:100%;
  }
  }
  button{
    width: 100%;
    height: 3.4rem;
    background-color: var(--green);
    border: none;
    outline: none;
    color: var(--white);
    font-size: 1.6rem;
    border-radius: 8px;
  }
  p{
    text-align: center;
    font-size: 1rem;
    a{
      color: var(--green);
    }
  }
  .arrow{
    position: absolute;
    top: 2rem;
    left: 2rem;
    display: flex;
    span{
      color: var(--green);
      font-size: 1.4rem;
    }
  }
`