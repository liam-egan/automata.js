# ca.js

[![MIT License][license-badge]][license][![Build Status][travis-badge]][travis]

A minimal JavaScript library for creating and manipulating cellular automata

## Installation

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

### UMD (browser global)

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

## Examples

The two central objects are the Automaton and the Cell. The Automaton represents a cellular automaton, with a grid of Cell objects. A Cell can either be enabled or disabled. The Automaton can update the states of these Cells via the getNextState method, which is passed in as produceNextCellState when creating the Automaton object. This method should take the current state of a cell, potentially the cells around it or whatever factors you like, and returns a new Cell containing the updated state.

There are also some built-in produceNextCellState functions that follow common rulesets, and there might be more in the future. Conway's Game of Life will probably be the most popular.

Creating an Automaton which follows the rules of Conway's Game of Life

```js
import { Automaton, nextCellStateFunctions } from 'ca.js'

const automaton = new Automaton({
  produceNextCellState: nextCellStateFunctions.produceNextConwayCellState,
  width: 10,
  height: 10,
})

const automatonAfterOneCycle = automaton.getNextCellState()
```

## Documentation

Documentation for this library can be found on the [GitHub Pages][docs-url]

[docs-url]: https://liam-egan.github.io/ca.js
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
[license]: https://github.com/liam-egan/ca.js/blob/master/LICENSE
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[travis]: https://travis-ci.org/liam-egan/ca.js
[travis-badge]: https://travis-ci.org/liam-egan/ca.js.svg?branch=master
[jsdelivr]: https://www.jsdelivr.com/
