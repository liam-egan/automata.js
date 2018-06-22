# ca.js

[![MIT License][license-badge]][license][![Build Status][travis-badge]][travis]

A minimal JavaScript library for creating and manipulating cellular automata

# Installation

The recommended way of installing is via [npm][npm] or [yarn][yarn]:

```
// npm
$ npm install ca.js

// yarn
$ yarn add ca.js
```

```js
const { Cell } = require('ca.js')

// or

import { Cell } from 'ca.js'
```

If you're not using npm as your package manager for your project, there are
other methods of installation listed below

## UMD (browser global)

Through a CDN such as [jsdelivr][jsdelivr]

```html
<script src="https://cdn.jsdelivr.net/npm/ca.js/dist/ca.min.js"></script>
<script>
  const c = ca.Cell()
</script>
```

Or by directly including the file

```html
<script src="path/to/ca.min.js"></script>
<script>
  const c = ca.Cell()
</script>
```

# Documentation

Documentation for this library can be found on the [GitHub Pages][docs-url]

[docs-url]: https://liam-egan.github.io/ca.js
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
[license]: https://github.com/liam-egan/ca.js/blob/master/LICENSE
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[travis]: https://travis-ci.org/liam-egan/ca.js
[travis-badge]: https://travis-ci.org/liam-egan/ca.js.svg?branch=master
[jsdelivr]: https://www.jsdelivr.com/
