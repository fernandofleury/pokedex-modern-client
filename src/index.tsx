import * as React from 'react';
import { render } from 'react-dom';
import client from './client';
import registerWorker from './serviceWorker/registerWorker';
import App from './components/App';

registerWorker();

render(<App />, document.getElementById('root'));
