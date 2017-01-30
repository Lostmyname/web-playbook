import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import reducers from '../universal/store/reducers';
import storeEnhancer from './store/storeEnhancer';
import routes from '../universal/routes';

var initialState = window.__reduxState__ || {};
var store = createStore(reducers, initialState, storeEnhancer);

ReactDOM.render(
  <Provider store={store}>
    <Router
      routes={routes}
      history={browserHistory}
    />
  </Provider>,
  document.getElementById('root')
);
