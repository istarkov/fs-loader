#Webpack loader for copy file content to filesystem
Copy file contents to filesystem, even if run under webpack-dev-server

##Usage:
```javascript
require('fs-loader?name=../../build/public/[name].[ext]!./templates/index.html');
```
*copy ./templates/index.html to ../../build/public/[name].[ext]*

## License
MIT (http://www.opensource.org/licenses/mit-license.php)
