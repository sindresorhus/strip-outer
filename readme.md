# strip-outer

> Strip a substring from the start/end of a string


## Install

```
$ npm install strip-outer
```


## Usage

```js
const stripOuter = require('strip-outer');

stripOuter('foobarfoo', 'foo');
//=> 'bar'

stripOuter('unicorncake', 'unicorn');
//=> 'cake'
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
