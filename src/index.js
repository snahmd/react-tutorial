import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';

function reducer(state, action) {
  if (action.type === 'changeTheState'){
    return action.payload.newState
  }
  return 'state';
}

const store = createStore(reducer);

console.log(store.getState());

const action = {
  type:'changeTheState',
  payload: {
    newState: 'my new state'
  }
};

const action2 = {
  type:'changeTheState',
  payload: {
    newState: 'my new state 2'
  }
};

store.subscribe(() => {
  console.log('Store updated');
  console.log(store.getState());
});

store.dispatch(action);
store.dispatch(action2);


ReactDOM.render(<App></App>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
