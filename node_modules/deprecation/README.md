# deprecation

> Log a deprecation message with stack

![build](https://action-badges.now.sh/gr2m/deprecation)

## Usage

```js
const Deprecation = require('deprecation')

function foo () {
  bar()
}

function bar () {
  baz() 
}

function baz () {
  console.warn(new Deprecation('[my-lib] foo() is deprecated, use bar()'))
}

foo()
// { Deprecation: [my-lib] foo() is deprecated, use bar()
//     at baz (/path/to/file.js:12:15)
//     at bar (/path/to/file.js:8:3)
//     at foo (/path/to/file.js:4:3)
```

To log a deprecation message only once, you can use the [once](https://www.npmjs.com/package/once) module.

```js
const Deprecation = require('deprecation')
const once = require('once')

const deprecateFoo = once(console.warn)

function foo () {
  deprecateFoo(new Deprecation('[my-lib] foo() is deprecated, use bar()'))
}

foo()
foo() // logs nothing
```

## License

[ISC](LICENSE)