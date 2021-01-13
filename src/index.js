import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import './index.css';
import App from './Components/App';

WebFont.load({
  google: {
    families: [
      'Montserrat:ital,wght@0,4000,600;0,700;1,400;1,600;1,700&display=swap',
      'Roboto:300,400,500,700&display=swap',
    ]
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
