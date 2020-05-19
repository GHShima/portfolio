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

body{
  color:#f0f2f5;
  font:1.6rem Roboto,sans-serif;
}
input, button, textarea{
  font:1.2rem Roboto,sans-serif;
}
.header {
  background: #2b2b2b;
  width: 100%;
  padding: 40px;
}
.content {
  max-width: 960px;
  margin: 0 auto;
  margin-bottom:100px;

}
h2 {
  text-align: center;
  font-size: 2rem;
}
h3 {
  margin-top: 10px;
  font-size: 1.7rem;
  text-align: center;
}
@media screen and (min-width: 2560px){
  #root{
    font-size: 80%;
  }
  h2{
    font-size: 3.2rem;
  }
  h3{
    font-size:2.2rem;
  }
}
`;
