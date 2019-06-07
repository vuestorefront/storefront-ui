const assert = require('assert')

const { Deprecation } = require('.')

let deprecation
function foo () {
  bar()
}

function bar () {
  baz()
}

function baz () {
  deprecation = new Deprecation('[my-lib] foo() is deprecated, use bar()')
}

foo()

assert.ok(/Deprecation: \[my-lib\] foo\(\) is deprecated, use bar\(\)/.test(deprecation.stack))
assert.ok(/at baz \([^)]+test\.js:15:17\)/.test(deprecation.stack))
assert.ok(/at bar \([^)]+test\.js:11:3\)/.test(deprecation.stack))
assert.ok(/at foo \([^)]+test\.js:7:3\)/.test(deprecation.stack))

console.log('test ok')
