import Automaton from './automaton'
import Cell from './cell'
import produceNextConwayCellState from './next-cell-state-functions/produceNextConwayCellState'
import produceNextRule30CellState from './next-cell-state-functions/produceNextRule30CellState'

export default {
  Automaton,
  Cell,
  nextCellStateFunctions: {
    produceNextConwayCellState,
    produceNextRule30CellState,
  },
}
