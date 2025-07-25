import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { accountService } from './components/_services';

// setup fake backend
import { configureBackend } from './components/_helpers';
configureBackend();

// attempt silent token refresh before startup
accountService.refreshToken().finally(startApp);

function startApp() {
  render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();