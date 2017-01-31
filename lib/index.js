const loaderUtils = require("loader-utils");
const REQUIRE_REGEX = /require\((['"`](.*?)['"`])\)/gm;

module.exports = function (source, sourcemap) {
  var query = loaderUtils.parseQuery(this.query);
  let replacers = [];
  if (query.exts) {
    replacers = query.exts;
  }
  var newSource = source.replace(REQUIRE_REGEX, function (match, url) {
    let newUrl = url
    replacers.forEach((setup) => {
      newUrl = newUrl.replace(setup.from, setup.to);
    })
    return `require(${newUrl})`;
  })
  return newSource;
}
