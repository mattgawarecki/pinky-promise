function wrap(p) {
  return new Promise(function(resolve, reject) {
    return p.then(resolve).catch(reject);
  });
}

module.exports = function(times) {
  return function(p) {
    var result;
    for (var i = 0; i < times; ++i) {
      result = wrap(p);
    }

    return result;
  }
};
