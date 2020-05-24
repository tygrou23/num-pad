//import from react and redux dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//import for using the reducer and the thunk
import reducer from './reducers/index';
import thunk from "redux-thunk";

//import boostrap from the design of the app 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//other imports 
import * as serviceWorker from './serviceWorker';
import App from './App';



const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
