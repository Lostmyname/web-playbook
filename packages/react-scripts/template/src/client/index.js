import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import reducers from '../universal/store/reducers';
import storeEnhancer from './store/storeEnhancer';
import routes from '../universal/routes';

var initialReduxState = window.__reduxState__ || {};
var store = createStore(reducers, initialReduxState, storeEnhancer);

var app = (
  <Provider store={store}>
    <Router
      routes={routes}
      history={browserHistory}
    />
  </Provider>
);

render(app, document.getElementById('root'));
