// import './App.css';
import React, { PropTypes } from 'react';
import Clock from '../Clock';
import ReduxExample from '../ReduxExample';
import { DataExample1 } from '../DataExample';
import { DataExample2 } from '../DataExample';

var App = ({ children }) => (
  <div>
    <h3>SSR test</h3>
    <Clock />

    <h3>react-router test</h3>
    {children}

    <h3>redux test</h3>
    <ReduxExample />

    <h3>redux withData test</h3>
    <DataExample1 />

    <h3>redux withData test</h3>
    <DataExample2 />
  </div>
);

App.propTypes = {
  children: PropTypes.node
};

export default App;
