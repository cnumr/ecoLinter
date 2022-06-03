# Externalize the import of .js and .css files (s32)


## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js

import {faireTirage} from './tirage.js'

```

Examples of **correct** code for this rule:

```js

import {faireTirage} from 'http://myhost/js/tirage.js'

```

