import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

*, *::before, *::after {
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px; /* 1rem */
}

body {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  color: white;
  text-transform: uppercase;
  background-color: black;
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: white;
  position: relative;
  font-size: 1.6rem;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: white;
    transition: width .1s ease-out;
  }

  &:hover::before {
    width: 100%;
  }
}

button {
  font-family: Arial, Helvetica, sans-serif;
  background-color: transparent;
  border: 2px solid white;
  padding: 15px 30px;
  color: white;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  transition: color .1s ease-out;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0%;
    background-color: white;
    width: 100%;
    z-index: -1;
    transition: height .1s ease-out;
  }

  &:hover {
    color: black;
    &::before {
      height: 100%;
    }
  }
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

span {
  color: var(--textcolor);
}

`;

export default Global;
