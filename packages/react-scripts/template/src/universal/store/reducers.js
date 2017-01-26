import { combineReducers } from 'redux';

// Try this out by opening Redux Dev Tools and dispatching 'TEST'
var testReducer = (state = '', action) => {
  if (action.type === 'TEST') {
    return 'test worked';
  }
  return state;
};

var reducers = combineReducers({
  test: testReducer
});

export default reducers;
