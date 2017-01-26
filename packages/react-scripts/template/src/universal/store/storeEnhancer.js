import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Enables Redux DevTools browser extension if available
// http://zalmoxisus.github.io/redux-devtools-extension/
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

var storeEnhancer = composeEnhancers(
  applyMiddleware(thunk)
);

export default storeEnhancer;
