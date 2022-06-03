# Assign to variable DOM objects access multiple times (s32)

## Rule Details

This rule aims to reduce DOM access assigning its object to variable when access multiple time

Examples of **incorrect** code for this rule:

```js
var el1 = document.getElementById('block1').test1;
var el2 = document.getElementById('block1').test2;
```

Examples of **correct** code for this rule:

```js
var block1 = document.getElementById('block1');
var el1 = blockElement.test1;
var el2 = blockElement.test2;
```
