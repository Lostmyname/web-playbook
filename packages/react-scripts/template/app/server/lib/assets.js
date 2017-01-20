var { isDev } = require('../system');

// @todo - should these functions be moved to react-scripts
// e.g. getManifest(), getAssetPath() etc.?
// seeing as the build location is configured there anyway
// name (e.g. importing module) has a weaker connascence than algorithm (e.g.
// manifest data structure and any potential validation of the asset name)

if (!isDev()) {
  try {
    var manifest = require('../../../../build/static/manifest.json');
  } catch (e) {
    console.log();
    console.log('Manifest could not be resolved. Run the build script before running the server in production.');
    console.log();
    throw new Error(e);
  }
}

exports.getAssetPath = function (name) {
  if (isDev()) {
    return `${name}`;
  }
  return manifest[name];
};
