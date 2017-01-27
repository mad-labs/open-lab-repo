import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';



ReactDOM.render(
  <App time={new Date()} testo="Questa è la data" bg={{"background": "red"}}/>,
  document.getElementById('root')
);
