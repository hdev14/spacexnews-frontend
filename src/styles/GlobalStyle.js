import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

*, *::before, *::after {
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
}

:root {
  /* Defina variaveis aqui */
  --bgcolor: #fff;
  --textcolor: #FF0E73;
}

html {
  font-size: 10px; /* 1rem */
}

body {
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  background-color: var(--bgcolor);
}

a {
  text-decoration: none;
  color: var(--textcolor);
}

button {
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
}

input, textarea, button {
  font-size: 1.4rem;
}

h1 {
  font-size: 2.8rem;
}

h2 { font-size: 2.4rem; }

h3 { font-size: 2rem; }

p { font-size: 1.6rem; }

/* Remover quando começa */
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

div h1 {
  margin-bottom: 10px;
}

span {
  color: var(--textcolor);
}

`;

export default Global;
