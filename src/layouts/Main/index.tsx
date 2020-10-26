import React from 'react';

import spacex from '../../assets/spacex.png';
import hygia from '../../assets/hygia.webp';

import { Container } from './styles';

const Main: React.FC = ({ children }) => (
  <Container>
    <header>
      <img src={spacex} alt="SpaceX Nóticias" />
    </header>

    {children}

    <footer>
      <img src={hygia} alt="Hygia Bank" />
      <small>Teste Full Stack JS</small>
    </footer>
  </Container>
);

export default Main;
