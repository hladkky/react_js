import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.3/lottie.js"
require('typeface-montserrat');

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
