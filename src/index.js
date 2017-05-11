import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduser from './reducers'
import App from './App'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router'
import EditContact from './components/EditContact';
import { syncHistoryWithStore } from 'react-router-redux'


const store = createStore(
                reduser, 
                composeWithDevTools(applyMiddleware(thunk))
              );

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}/>
      <Route path="/EditContact/:id" component={EditContact}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);