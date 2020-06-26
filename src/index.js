import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'materialize-css'
import * as serviceWorker from './serviceWorker';
require('typeface-montserrat');

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
