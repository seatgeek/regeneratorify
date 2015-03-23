# regeneratorify

Browserify plugin to transform a Javascript source file with ES6 generators into ES5 using Facebook's Regenerator library.

In addition to transforming the source code, Regeneratorify automatically adds a `var regeneratorRuntime`  delcaration at the head of the file. This is necessary for the transformed generator code to run. A copy of the Regenerator runtime will also be added to your Browserify bundle.

The original project by **amiorin** does not seem to have been updated since 2013. This is meant to be an up-to-date, maintained version.


## Install
```
$ npm install regeneratorify
```

## Use
```
$ browserify -t regeneratorify main.js > bundle.js
```

Or, programatically:
```js
var regeneratorify = require('regeneratorify');

// Later...
bundle.transform(regeneratorify)
```

## Credits
* [browserify](https://github.com/substack/node-browserify)
* [regenerator](https://github.com/facebook/regenerator)


