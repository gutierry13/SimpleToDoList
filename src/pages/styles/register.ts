import styled from "styled-components";
export const RegisterContainer = styled.div`
background-color: var(--white);
  width: 100%;
  max-width: 620px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 1px solid #DBDBDB;
  .text{
    text-align: center;
    margin-bottom: 1.4rem;
    margin-top: 1rem;
    h1{
    font-size: 2rem;
    line-height: 1.5;
    font-weight: 700;
    }
    p{
      line-height: 1.4;
      font-size: 1.2rem;
    }
  }
  .arrow{
    position: absolute;
    top: 2rem;
    left: 2rem;
    span{
      color: var(--green);
      font-size: 1.4rem;
    }
  }

`
export const RegisterForm = styled.form`
  
  max-width: 510px;
  width: 100%;
  .name{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    input{
      width: 100%;
    }
  }
  label{
    font-size: 1.2rem;
    line-height: 1.4;
    margin-bottom: .4rem;
    font-weight: 500;
  }
  input,select{
    width: 100%;
    height: 3rem;
    line-height: 1.4;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    }
    button{
      width: 100%;
      height: 3.75rem;
      margin-bottom: 3.8rem;
      border-radius: 8px;
      font-size: 1.2rem;
      font-weight: 500;
      cursor: pointer;
      border: none;
      background-color: var(--green);
      color: var(--white);

    }

`