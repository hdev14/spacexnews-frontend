import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import Main from './layouts/Main';
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ToastContainer position={toast.POSITION.TOP_LEFT} autoClose={3000} />
    <Main>
      <App />
    </Main>
  </React.StrictMode>,
  document.getElementById('root'),
);
