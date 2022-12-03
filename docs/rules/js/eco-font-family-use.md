# prevent use of custom font for eco coding (eco-font-family-use)

This rule is exist in scope of the eco coding. The use of custom fonts cost requests to get them

## Rule Details

This rule warn the user if he used a non standard font.

Examples of **incorrect** code for this rule:

```css

    font-family: "Impact, sans-serif";

```

```js

    fontFamily: "Impact, sans-serif";

```

Examples of **correct** code for this rule:

```css

    fontFamily: "serif, sans-serif";

```

```js

    fontFamily: "serif, sans-serif";

```

### Options

No option

## When Not To Use It

You should not use it if you need to use custom fonts

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
