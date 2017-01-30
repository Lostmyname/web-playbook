import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { rehydrateJobs } from 'react-jobs/ssr';
import reducers from '../universal/store/reducers';
import storeEnhancer from './store/storeEnhancer';
import routes from '../universal/routes';

var initialReduxState = window.__reduxState__ || {};
var store = createStore(reducers, initialReduxState, storeEnhancer);

var app = (
  <Provider store={store}>
    <Router
      routes={routes}
      history={browserHistory}
    />
  </Provider>
);

// Provide your app component to the rehydrateJobs function
// so that the job data from the server is restored into your
// the browser render of your app. This will make sure the
// React checksums match with the response from the server
// and will prevent any 'double' rendering of your app.
// and you get back a result object.
rehydrateJobs(app).then(runResult => {
  // The rehydrateResult includes a decorated version of
  // your app that will have all the jobs data on it. Make
  // sure you us this for the render call.
  var { appWithJobs } = runResult;

  render(appWithJobs, document.getElementById('root'));
});
