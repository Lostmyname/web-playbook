require('isomorphic-fetch')

module.exports.get = function () {
  return fetch('https://api.lostmy.name/mermaid/api/v2/currencies')
    .then(r => r.json())
}
