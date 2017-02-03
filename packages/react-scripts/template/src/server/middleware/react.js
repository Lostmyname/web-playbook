import React from 'react';
import { compose, createStore } from 'redux';
import withReady from 'redux-ready';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../../universal/routes';
import reducers from '../../universal/store/reducers';
import storeEnhancer from '../../universal/store/storeEnhancer';

module.exports = function reactMiddleware(req, res, next) {
  match({ routes, location: req.url }, function (
    error,
    redirectLocation,
    renderProps
  ) {
    if (error) {
      sendError(res, error);
    } else if (redirectLocation) {
      redirect(res, redirectLocation);
    } else if (renderProps) {
      renderApp(res, renderProps);
    } else {
      next();
    }
  });
};

function renderApp(res, renderProps) {
  var store = createStore(reducers, {}, compose(withReady, storeEnhancer));

  var app = (
    <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>
  );

  // Initial render of app dispatches any actions in components' lifecycle
  var appHtml = renderToString(app);

  // Wait for asyncronous actions to resolve
  store.ready().then(state => {
    // Re-render app with the async data now in the store
    appHtml = renderToString(app);
    res.status(200).render('react', { appHtml, storeState: state });
  });
}

function redirect(res, redirect) {
  res.redirect(302, redirect.pathname + redirect.search);
}

function sendError(res, err) {
  res.status(500).send(err.message);
}
