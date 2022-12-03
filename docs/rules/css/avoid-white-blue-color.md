# Avoid too many css animations


## Rule Details

Try to avoid to use white and blue color because both of then use too many resources.

Example of **incorrect** code for this rule:

```css
@media screen and (min-width: 480px) {
    body {
        background-color: white;
    }
}
```
```css
@media screen and (min-width: 480px) {
    body {
        background-color: blue;
    }
}
```

Example of **correct** code for this rule:

```css
@media screen and (min-width: 480px) {
    body {
        background-color: lightgrey;
    }
}
```
```css
@media screen and (min-width: 480px) {
    body {
        background-color: darkblue;
    }
}
```