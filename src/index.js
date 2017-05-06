import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

function reduser(){}

const store = createStore(reduser, 
                          window.__REDUX_DEVTOOLS_EXTENSION__ && 
                          window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends React.Component{
  render(){
    return(
      <h1>
        It's React, and I'm working now.
      </h1>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);