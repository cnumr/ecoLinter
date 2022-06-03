# Avoid to override getter or setter (s34)

Please describe the origin of the rule here.


## Rule Details

This rule aims to flag when override getter or setter

Examples of **incorrect** code for this rule:

```js
Object.defineProperty(foo, "bar", { get: function() {}})

```

Examples of **correct** code for this rule:

```js

const obj = {
  log: ['a', 'b', 'c'],
  get latest() {
    if (this.log.length === 0) {
      return undefined;
    }
    return this.log[this.log.length - 1];
  }
};

``` 
