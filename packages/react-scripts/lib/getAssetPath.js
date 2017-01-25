var paths = require('../config/paths');

if (process.env.NODE_ENV === 'production') {
  try {
    var manifest = require(paths.manifest);
  } catch (e) {
    console.log();
    console.log('Manifest could not be resolved. Run the build script before running the server in production.');
    console.log();
    throw new Error(e);
  }
}

module.exports = function (name) {
  if (process.env.NODE_ENV === 'production') {
    return manifest[name];
  }
  return `${name}`;
};
