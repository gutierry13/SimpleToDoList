import styled from "styled-components";
export const HomeContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  height: 100vh;
  width: 240px;
  top: 0;
  left: 0;
  background-color: var(--white);
  div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    &:not(:last-child){
      margin-bottom: 2rem;
    }
  }

nav{
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

footer{
  margin-bottom: 3rem;
  display: flex;
  input[type=checkbox]{
  height: 0;
  width: 0;
  visibility: hidden;
}
label {
  cursor: pointer;
  text-indent: -9999px;
  width: 52px;
  height: 27px;
  background: grey;
  float: right;
  border-radius: 100px;
  position: relative;
  &::after{
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 90px;
  transition: 0.3s;
}
}

input:checked + label {
  background-color: #f6f6f6;
}
input:checked + label::after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}
label:active:after {
  width: 45px;
}
}
`