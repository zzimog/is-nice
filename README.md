# is-nice

Dependencies-free checker for nice arguments.

## Installation

```sh
npm --save i is-nice
```

## Usage

```js
const isNice = require('is-nice');

isNice(69420); // true
isNice('69420'); // true
isNice(69, 420); // true

isNice(69.42); // false, zero will be removed resulting in 69.42 (not nice)
isNice(123); // false
isNice('foo'); // false
```

## License

[WTFPL](http://www.wtfpl.net/txt/copying/)
