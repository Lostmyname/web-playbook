import { combineReducers } from 'redux';
import testReducer from './ducks/test/reducer';
import jobsReducer from './ducks/_jobs_/reducer';

var reducers = combineReducers({
  test: testReducer,
  _jobs_: jobsReducer
});

export default reducers;
