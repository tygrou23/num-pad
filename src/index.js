//import react and redux depedencies
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import thunk from "redux-thunk";

import App from './App';
import * as serviceWorker from './serviceWorker';

//import boostrap from the design of the app 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const store = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
