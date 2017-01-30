import { compose } from 'redux';
import storeEnhancer from '../../universal/store/storeEnhancer';

export default compose(
  storeEnhancer,
  // Enables Redux DevTools browser extension if available
  // http://zalmoxisus.github.io/redux-devtools-extension/
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
