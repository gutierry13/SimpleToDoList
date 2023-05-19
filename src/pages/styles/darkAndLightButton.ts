import styled from "styled-components";
export const InputContainerDarkAndLight = styled.div`
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
}
label::after{
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
input:checked + label {
  background-color: var(--color-headings);
}
input:checked + label::after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}
label:active:after {
  width: 45px;
}
`