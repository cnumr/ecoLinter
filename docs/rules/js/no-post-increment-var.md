# Remplacer les i++ par ++i (s67)


## Rule Details

The form i++ creates a temporary variable whereas ++i does not. It save CPU cycles.

Examples of **incorrect** code for this rule:

```js

i++

```

Examples of **correct** code for this rule:

```js

++i

```
