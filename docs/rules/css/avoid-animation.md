# Avoid too many css animations


## Rule Details

will-change is intended to be used as a last resort, in order to try to deal with existing performance problems. It should not be used to anticipate performance problems.

Example of **incorrect** code for this rule:

```css
.box {
  will-change: transform, opacity;
}
```

Alternative code for this rule:

```css
@media (prefers-reduced-motion: no-preference) {
  .animation {
    animation: fadeIn 4s ease;
  }
}
```

