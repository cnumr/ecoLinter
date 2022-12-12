# Avoid too many css animations


## Rule Details

Try to avoid to use white and blue color because both of then use too many resources.


We know that each pixel as a resource consumption. We also know that the Blue pixel can be the more dangerous for a monitor.
Because it is the one which can damage the more and use more resources just behind the white in OLED monitor.
That is why this rule is made in order to prevent white and blue pixel in monitor and increase its lifetime and decrease its consumption

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