# automata.js

[![MIT License][license-badge]][license]

A minimal JavaScript library for creating and manipulating cellular automata

# Installation

The recommended way of installing is via [npm][npm] or [yarn][yarn]:

```
// npm
$ npm install automata.js

// yarn
$ yarn add automata.js
```

```js
const { Cell } = require('automata.js')

// or

import { Cell } from 'automata.js'
```

If you're not using npm as your package manager for your project, there are
other methods of installation listed below

## UMD (browser global)

Through a CDN such as [jsdelivr][jsdelivr]

```html
<script src="https://cdn.jsdelivr.net/npm/automata.js/dist/automata.min.js"></script>
<script>
  const c = automata.Cell()
</script>
```

Or by directly including the file

```html
<script src="path/to/automata.min.js"></script>
<script>
  const c = automata.Cell()
</script>
```

# Documentation

Documentation for this library can be found on the [GitHub Pages][docs-url]

[docs-url]: https://liam-egan.github.io/automata.js
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
[license]: https://github.com/liam-egan/automata.js/blob/master/LICENSE
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[jsdelivr]: https://www.jsdelivr.com/
