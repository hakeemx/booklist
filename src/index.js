import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//import App from './App';
import App from './components/app';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';


//import registerServiceWorker from './registerServiceWorker';
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root')); 




