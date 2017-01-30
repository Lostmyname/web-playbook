import { TEST } from './actions';

var defaultState = 'initial test state';

// Try this out by opening Redux Dev Tools and dispatching { type: 'TEST' }
export default function testReducer(state = defaultState, action) {
  if (action.type === TEST) {
    return 'reduced test state';
  }
  return state;
};
