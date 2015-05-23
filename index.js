var loaderUtils = require('loader-utils');
var path = require('path');
var fs = require('fs');

module.exports = function fsLoader(content) {
  var query = loaderUtils.parseQuery(this.query);
  var url = loaderUtils.interpolateName(this, query.name || '[hash].[ext]', {
    context: query.context || this.options.context,
    content: content,
    regExp: query.regExp
  });

  if (this.cacheable) {
    this.cacheable();
  }

  if (!this.emitFile) {
    throw new Error('emitFile is required from module system');
  }

  this.emitFile(url, content);

  if (url && url.length > 0) {
    if (url[0] === '.') {
      fs.writeFileSync(path.join(path.dirname(path.resolve(this.resourcePath)), url), content);
    } else {
      fs.writeFileSync(url, content);
    }
  }

  return 'module.exports = __webpack_public_path__ + ' + JSON.stringify(url);
};

module.exports.raw = true;
