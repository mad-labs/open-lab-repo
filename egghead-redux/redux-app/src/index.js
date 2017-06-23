import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './components/app1';
import App2 from './components/app2';
import App3 from './components/app3';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App1 />, document.getElementById('root1'));
ReactDOM.render(<App2 />, document.getElementById('root2'));
ReactDOM.render(<App3 />, document.getElementById('root3'));
registerServiceWorker();
