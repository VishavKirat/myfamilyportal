import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger'
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase'
import {reduxFirestore,getFirestore} from 'redux-firestore'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './ReStore/rootReducer';
import fbConfig from './config/fbConfig'


const logger = createLogger({
    collapsed : true,
})
const store = createStore(rootReducer,compose(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore}), logger),reactReduxFirebase(fbConfig),reduxFirestore(fbConfig)))

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
