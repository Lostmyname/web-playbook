// import './App.css';
import React, { PropTypes } from 'react';
import Clock from '../Clock';
import ReduxExample from '../ReduxExample';
import JobsExample from '../JobsExample';

var App = ({ children }) => (
  <div>
    <h3>SSR test</h3>
    <Clock />

    <h3>react-router test</h3>
    {children}

    <h3>redux test</h3>
    <ReduxExample />

    <h3>react-jobs test</h3>
    <JobsExample />
  </div>
);

App.propTypes = {
  children: PropTypes.node
};

export default App;
