import getCellNeighbors from '../util/getCellNeighbors'
import Cell from '../cell'

const conwayOffsets = [
  {
    column: -1,
    row: -1,
  },
  {
    column: -1,
    row: 0,
  },
  {
    column: -1,
    row: 1,
  },
  {
    column: 0,
    row: -1,
  },
  {
    column: 0,
    row: 1,
  },
  {
    column: 1,
    row: -1,
  },
  {
    column: 1,
    row: 0,
  },
  {
    column: 1,
    row: 1,
  },
]

/**
 * Produces the next cell state based on the rules of Conway's Game of Life
 * @memberOf NextCellStateFunctions
 * @name produceNextConwayCellState
 * @type {NextCellStateFunction}
 */
export default function produceNextConwayCellState(
  enabled,
  automaton,
  row,
  column,
) {
  const neighbors = getCellNeighbors({
    offsets: conwayOffsets,
    cells: automaton.cells,
    row,
    column,
  })
  const enabledNeighbors = neighbors.filter(({ enabled }) => enabled)
  const enabledNeighborsAmount = enabledNeighbors.length

  if (enabled && enabledNeighborsAmount < 2) {
    return new Cell(false)
  }

  if (
    enabled &&
    (enabledNeighborsAmount === 3 || enabledNeighborsAmount === 2)
  ) {
    return new Cell(true)
  }

  if (enabled && enabledNeighborsAmount > 3) {
    return new Cell(false)
  }

  if (!enabled && enabledNeighborsAmount === 3) {
    return new Cell(true)
  }

  return new Cell(false)
}
