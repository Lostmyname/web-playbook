var paths = require('../config/paths');

console.log('found the module yay')
console.log('NIODE_ENV', process.env.NODE_ENV)

if (process.env.NODE_ENV === 'production') {
  try {
    var manifest = require(paths.manifest);
    console.log('got the manifest')
    console.log(manifest)
  } catch (e) {
    console.log('require failed! shit!')
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
