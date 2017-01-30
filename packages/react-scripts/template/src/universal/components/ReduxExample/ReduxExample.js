import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getTest } from '../../store/ducks/test/selectors';
import * as actions from '../../store/ducks/test/actions';

var enhance = connect(
  state => ({
    test: getTest(state) }
  ),
  dispatch => ({
    onTestClick: () => dispatch(actions.test())
  })
);

var Test = props => (
  <div>
    <p>test state: <code>{props.test}</code></p>
    <button onClick={props.onTestClick}>Dispatch TEST action</button>
  </div>
);

Test.propTypes = {
  test: PropTypes.string,
  clicked: PropTypes.bool,
  onTestClick: PropTypes.func
};

export default enhance(Test);
