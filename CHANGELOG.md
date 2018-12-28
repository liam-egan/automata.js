# Changelog

All notable changes to this project are documented in this file. This project adheres to [semantic versioning][semver]

## [2.1.0] - 2018-12-28

### Added

- Two built-in produceNextCellState functions, produceNextConwayCellState and produceNextRule30CellState, which follow the rules of Conway's Game of Life and Wolfram's Rule 30 respectively

## [2.0.0] - 2018-08-05

### Changed

- The interface is now based on classes instead of object factories
- Automaton.next() is now Automaton.getNextState()
- produceNextCellState is passed parameters in a different order
- produceNextCellState is passed the current cell state as the first argument
- The Automaton constructor throws a few different errors than before

### Removed

- Object factories

## [1.0.0] - 2018-06-21

### Added

- Automaton object factory
- Cell object factory

[semver]: https://semver.org/
[1.0.0]: https://github.com/liam-egan/automata.js/releases/tag/v1.0.0
