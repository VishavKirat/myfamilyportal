import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './ReStore/rootReducer'

const logger = createLogger({
    collapsed : true,
})
const store = createStore(rootReducer,applyMiddleware(thunk, logger))

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
