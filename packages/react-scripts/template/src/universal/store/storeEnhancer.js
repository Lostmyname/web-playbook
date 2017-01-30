import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

var storeEnhancer = compose(
  applyMiddleware(thunk)
);

export default storeEnhancer;
