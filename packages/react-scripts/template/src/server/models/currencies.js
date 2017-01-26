exports.get = function () {
  return fetch('https://api.lostmy.name/website/v1/currencies')
    .then(r => r.json());
};
