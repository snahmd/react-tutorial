import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { combineReducers, createStore } from 'redux';

function userReducer(state = '', action) {
  return state;
}

function productReducer(state = [], action) {
  return state;
}

const rootReducer = combineReducers({
  products: productReducer,
  user: userReducer
});

const store = createStore(rootReducer, {
  products: [{
    name: 'Samsung',
    type: 'TV'
  }],
  user: 'Ahmed'
});

console.log(store.getState());




ReactDOM.render(<App></App>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
