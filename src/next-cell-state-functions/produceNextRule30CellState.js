import getCellNeighbors from '../util/getCellNeighbors'
import Cell from '../cell'

const rule30Offsets = [
  {
    row: -1,
    column: -1,
  },
  {
    row: -1,
    column: 0,
  },
  {
    row: -1,
    column: 1,
  },
]

/**
 * Produces the next cell state based on the rules of Wolfram's Rule 30
 * @memberOf NextCellStateFunctions
 * @name produceNext30RuleCellState
 * @type {NextCellStateFunction}
 */
export default function produceNext30RuleCellState(
  enabled,
  automaton,
  row,
  column,
) {
  const neighbors = getCellNeighbors({
    offsets: rule30Offsets,
    cells: automaton.cells,
    row,
    column,
    keepUndefinedNeighbors: true,
  }).map(neighbor => (neighbor === undefined ? new Cell(false) : neighbor))

  const leftNeighbor = neighbors[0]
  const centerNeighbor = neighbors[1]
  const rightNeighbor = neighbors[2]
  const newEnabledState =
    enabled ||
    !!(leftNeighbor.enabled ^ (centerNeighbor.enabled || rightNeighbor.enabled))

  return new Cell(newEnabledState)
}
