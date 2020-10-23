import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import styled from 'styled-components'

import Routes from './Routes';

const Navbar = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  margin: 20px 0;
  padding: 0 50px;
  align-items: center;

  nav {
    a + a {
      margin-left: 30px;
    }
  }
`;

function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <h1>SPACEX NEWS</h1>
        <nav>
          <Link to="/">Notícias</Link>
          <Link to="/users">Usuários</Link>
        </nav>
      </Navbar>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
