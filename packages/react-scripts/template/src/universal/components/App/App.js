/* eslint-disable react/prefer-es6-class */
// import './App.css';
import React, { PropTypes } from 'react';
import Clock from '../Clock';

var App = ({ children }) => (
  <div>
    <Clock />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.node
};

export default App;
