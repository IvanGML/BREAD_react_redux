import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import initialState from './data/contacts'
import App from './components/App'

function reduser(state = initialState, action){
  return state;
}

const store = createStore(reduser, 
                          window.__REDUX_DEVTOOLS_EXTENSION__ && 
                          window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);