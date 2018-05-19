import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './state/containers/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import rootReducer from './state/reducers/index.js';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
