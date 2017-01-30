import { combineReducers } from 'redux';
import testReducer from './ducks/test/reducer';

var reducers = combineReducers({
  test: testReducer
});

export default reducers;
