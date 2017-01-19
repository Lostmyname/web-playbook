// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
// @remove-on-eject-end

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var url = require('url');
var paths = require('./paths');
var getClientEnvironment = require('./env');

// @remove-on-eject-begin
// `path` is not used after eject - see https://github.com/facebookincubator/create-react-app/issues/1174
var path = require('path');
// @remove-on-eject-end

function ensureSlash(path, needsSlash) {
  var hasSlash = path.endsWith('/');
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return path + '/';
  } else {
    return path;
  }
}

// We use "homepage" field to infer "public path" at which the app is served.
// Webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
var homepagePath = require(paths.appPackageJson).homepage;
var homepagePathname = homepagePath ? url.parse(homepagePath).pathname : '/';
// Webpack uses `publicPath` to determine where the app is being served from.
// It requires a trailing slash, or the file assets will get an incorrect path.
var publicPath = ensureSlash(homepagePathname, true);
// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_PATH%/xyz looks better than %PUBLIC_PATH%xyz.
var publicUrl = ensureSlash(homepagePathname, false);
// Get environment variables to inject into our app.
var env = getClientEnvironment(publicUrl);

// Assert this just to be safe.
// Development builds of React are slow and not intended for production.
if (env['process.env'].NODE_ENV !== '"production"') {
  throw new Error('Production builds must have NODE_ENV=production.');
}

// This is the production configuration.
// It compiles slowly and is focused on producing a fast and minimal bundle.
// The development configuration is different and lives in a separate file.
module.exports = {
  // Don't attempt to continue if there are any errors.
  bail: true,
  // We generate sourcemaps in production. This is slow but gives good results.
  // You can exclude the *.map files from the build during deployment.
  devtool: 'source-map',
  // In production, we only want to load the polyfills and the app code.
  entry: [
    require.resolve('./polyfills'),
    paths.appIndexJs
  ],
  output: {
    // The build folder.
    path: paths.appBuild,
    // Generated JS file names (with nested folders).
    // There will be one main bundle, and one file per asynchronous chunk.
    // We don't currently advertise code splitting but Webpack supports it.
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    // We inferred the "public path" (such as / or /my-project) from homepage.
    publicPath: publicPath
  },
  resolve: {
    // These are the reasonable defaults supported by the Node ecosystem.
    // We also include JSX as a common component filename extension to support
    // some tools, although we do not recommend using it, see:
    // https://github.com/facebookincubator/create-react-app/issues/290
    extensions: ['.js', '.json', '.jsx', '.scss'],
    alias: {
      // Support React Native Web
      // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
      'react-native': 'react-native-web',
      // Alias all our core modules
      '@lostmyname/components': path.resolve('./node_modules/@lostmyname/components/dist'),
      chameleon: path.resolve('./node_modules/chameleon-sass/assets/stylesheets'),
      '@lostmyname/css': path.resolve('./node_modules/@lostmyname/css/scss'),
      fonts: path.resolve('./node_modules/@lostmyname/css/fonts'),
      scss: path.resolve('./src/scss'),
      helpers: path.resolve('./src/js/helpers')
    }
  },
  // @remove-on-eject-begin
  // Resolve loaders (webpack plugins for CSS, images, transpilation) from the
  // directory of `react-scripts` itself rather than the project directory.
  resolveLoader: {
    modules: [paths.ownNodeModules]
  },
  // @remove-on-eject-end
  module: {
    rules: [
      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: path.appNodeModules,
        options: {
          configFile: path.join(__dirname, '../.eslintrc'),
          useEslintrc: false
        }
      },

      // Process JS with Babel.
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            require.resolve('babel-preset-react'),
            [require.resolve('babel-preset-es2015'), {
              modules: false
            }]
          ],
          plugins: [
            require.resolve('babel-plugin-transform-object-rest-spread')
          ],
        }
      },

      // "postcss" loader applies autoprefixer to our CSS.
      // "css" loader resolves paths in CSS and adds assets as dependencies.
      // "style" loader turns CSS into JS modules that inject <style> tags.
      // In production, we use a plugin to extract that CSS to a file, but
      // in development "style" loader enables hot editing of CSS.
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            { loader: 'css-loader?minimize' },
            // See postcss.config.js for configuration
            {
              loader: 'postcss-loader',
              options: {
                // Annoyingly this is all completely annoyed as there is some incompatibility with extract plugin
                // Using LoaderOptionsPlugin for now
                ident: 'postcss',
                plugins: () => {
                  return [
                    require('autoprefixer')({
                      browsers: [
                        '>1%',
                        'last 3 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                      ]
                    })
                  ];
                }
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }),
      },

      // JSON is not enabled by default in Webpack but both Node and Browserify
      // allow it implicitly so we also enable it.
      {
        test: /\.json$/,
        loader: 'json-loader'
      },

      // Find svg images from the /images/ folder and use the svg-url-loader
      {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      },

      // "file" loader makes sure those assets get served by WebpackDevServer.
      // When you `import` an asset, you get its (virtual) filename.
      // In production, they would get copied to the `build` folder.
      {
        test: /fonts\/.*\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    // Makes some environment variables available to the JS code, for example:
    // if (process.env.NODE_ENV === 'production') { ... }. See `./env.js`.
    // It is absolutely essential that NODE_ENV was set to production here.
    // Otherwise React will be compiled in the very slow development mode.
    new webpack.DefinePlugin(env),
    // This helps ensure the builds are consistent if source hasn't changed:
    new webpack.optimize.OccurrenceOrderPlugin(),
    // Try to dedupe duplicated modules, if any:
    new webpack.optimize.DedupePlugin(),
    // Minify the code.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    // Note: this won't work without ExtractTextPlugin.extract(..) in `loaders`.
    new ExtractTextPlugin('static/css/[name].[contenthash:8].css'),
    // Generate a manifest file which contains a mapping of all asset filenames
    // to their corresponding output file so that tools can pick it up without
    // having to parse `index.html`.
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    }),
    // This is still required ofr building currently
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: {
          plugins: () => {
            return [
              require('autoprefixer')({
                browsers: [
                  '>1%',
                  'last 3 versions',
                  'Firefox ESR',
                  'not ie < 9', // React doesn't support IE8 anyway
                ]
              })
            ];
          }
        }
      }
    }),
    // Will automcatically run Stylelint on all css files
    new StyleLintPlugin({
      configFile: path.join(__dirname, '../.stylelintrc')
    })
  ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
