import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../../universal/routes';

module.exports = function (req, res, next) {
  match({ routes, location: req.url }, function (error, redirectLocation, renderProps) {
    if (error) {
      handleError(res, error);
    } else if (redirectLocation) {
      handleRedirect(res, redirectLocation);
    } else if (renderProps) {
      handleRender(res, renderProps);
    } else {
      next();
    }
  });
};

function handleRender(res, renderProps) {
  var App = React.createElement(RouterContext, renderProps);
  var appHtml = renderToString(App);

  res.status(200).render('react', { appHtml });
}

function handleRedirect(res, redirect) {
  res.redirect(302, redirect.pathname + redirect.search);
}

function handleError(res, err) {
  res.status(500).send(err.message);
}
