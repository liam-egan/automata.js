import Cell from './cell'

/**
 * Utilities related to automata
 * @module Automaton
 */

/**
 * A stateful, immutable grid of cells, each with an enabled or disabled state
 * @typedef Automaton
 * @property {Array<Array<Cell>>} cells The grid of cells
 * @property {NextFunction} next A function which returns the next state of the
 * automaton based on the current state
 *
 */

/**
 * A function which takes the current state of the automaton and produces the
 * updated state
 * @function
 * @typedef NextFunction
 * @return {Automaton} An automaton with the updated state
 */

/**
 * A function which produces the next state of a given cell
 * @function
 * @typedef NextCellFunction
 * @param {number} x The x coord of the cell
 * @param {number} y The y coord of the cell
 * @param {Automaton} automaton The complete automaton at the state before next
 * was called
 * @return {Cell} A cell with the updated state
 */

/**
 * Produces an automaton with the desired options
 * @param {Object} options The options
 * @param {NextCellFunction} options.produceNextCellState Function which is
 * applied to each of the cells in the grid and produces the next state of each
 * cell
 * @param {number} [options.width=1] The width of the grid to create. Useless if
 * cells is also present
 * @param {number} [options.height=1] The height of the grid to create. Useless
 * if cells is also present
 * @param {Array<Array<Cell>>} [options.cells] Predefined array of cells.
 * Defaults to an array of given width and height
 * @throws {TypeError} If produceNextCellState is missing
 * @return {Automaton}
 *
 * @example
 * const a = automata.Automaton({
 *   produceNextCellState: () => true,
 *   width: 10,
 *   height: 10
 * })
 *
 * @example
 * const a = automata.Automaton({
 *   produceNextCellState: () => true,
 *   cells: [[automata.Cell(false)]]
 * })
 */
function Automaton(options = {}) {
  const { produceNextCellState, width = 1, height = 1 } = options

  if (!produceNextCellState) {
    throw new TypeError('produceNextCellState is required')
  }

  let { cells } = options

  if (width && height && !cells) {
    cells = Array.from(Array(height), (v, i) =>
      Array.from(Array(width), (v, i) => Cell(false)),
    )
  }

  const next = () => {
    const currentState = Automaton({
      produceNextCellState,
      cells,
    })

    return Automaton({
      produceNextCellState,
      cells: cells.map((cellRow, y) =>
        cellRow.map((cell, x) =>
          Cell({
            enabled: !!produceNextCellState(x, y, currentState),
          }),
        ),
      ),
    })
  }

  return {
    next,
    cells,
  }
}

export default Automaton
