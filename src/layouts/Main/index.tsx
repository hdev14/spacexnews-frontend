import React from 'react';

import spacex from '../../assets/spacex.png';

import { Container } from './styles';

const Main: React.FC = ({ children }) => (
  <Container>
    <header>
      <img src={spacex} alt="SpaceX Nóticias" />
    </header>

    {children}

    <footer>
      <small>
        Desenvolvido por
        {' '}
        <strong>hdev</strong>
      </small>
    </footer>
  </Container>
);

export default Main;
