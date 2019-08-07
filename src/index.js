import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { store } from './store';

const render = () => ReactDOM.render(<App />, document.getElementById('root'));

store.subscribe(render);
render()
registerServiceWorker();
