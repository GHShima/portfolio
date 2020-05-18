import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:border-box;
}
#root{
  margin: 0 auto;
  font-size: 62.5%;

}
body {
  background: #323232;
  -webkit-font-smoothing: antialiased;
}

body, input, button{
  color:#f0f2f5;
  font:1.6rem Roboto,sans-serif;
}
.header {
  background: #2b2b2b;
  width: 100%;
  padding: 40px;
}
.content {
  max-width: 960px;
  margin: 0 auto;
}

`;
