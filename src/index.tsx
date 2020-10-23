import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Main from './layouts/Main'
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Main>
      <App />
    </Main>
  </React.StrictMode>,
  document.getElementById('root'),
);
