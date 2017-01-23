var chalk = require('chalk');

module.exports = function runWebpackDevServer(devServer, port) {
  devServer.listen(port, (err, result) => {
    if (err) {
      return console.log(err);
    }

    console.log(chalk.green('Asset server running'));
  });
}
