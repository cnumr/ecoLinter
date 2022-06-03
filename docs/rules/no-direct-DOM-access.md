# No DOM access without assignation (s57)


## Rule Details

This rule aims to limit DOM access

DOM access cost a lot of resources. 
We should be using variables to avoid requesting the same element multiple times
If you are doing a single reference, you can ignore this suggestion

Examples of **incorrect** code for this rule:

```js

document.getElementById("myElement").action1();
document.getElementById("myElement").action2();

```

Examples of **correct** code for this rule:

```js

const myElement = document.getElementById("myElement");
myElement.action1();
myElement.action2();

```

