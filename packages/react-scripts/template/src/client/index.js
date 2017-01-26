import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../common/components/App';
import reducers from '../common/store/reducers';
import storeEnhancer from '../common/store/storeEnhancer';

var initialState = {};
var store = createStore(reducers, initialState, storeEnhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
