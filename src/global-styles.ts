import {createGlobalStyle} from "styled-components";
export const GlobalStyle = createGlobalStyle`
:root{
  --white: #fff;

  --green:#00A551;

  --gray-text:#474749;
  --gray-input:#F4F4F4;

  --all-background:#E5E5E5;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,input,textarea,select{
  font-family: 'Poppins', monospace;

}
body{
  background-color: var(--all-background);
}
`