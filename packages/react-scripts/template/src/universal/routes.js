import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/App/Home';
import Test from './components/App/Test';

export default (
  <Route
    path="/"
    component={App}>
    <IndexRoute component={Home} />
    <Route
      path="test"
      component={Test}
    />
  </Route>
);
