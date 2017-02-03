import { combineReducers } from 'redux';
import testReducer from './ducks/test/reducer';
import jobsReducer from './ducks/_data_/reducer';

var reducers = combineReducers({
  test: testReducer,
  _data_: jobsReducer
});

export default reducers;
