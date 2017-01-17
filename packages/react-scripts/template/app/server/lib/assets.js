var { isDev } = require('../system');

exports.getAssetPath = function (name) {
  if (isDev()) {
    return `/static/js/${name}.js`;
  }
}
