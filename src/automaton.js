import Cell from './cell'

/**
 * Represents a stateful automaton made up of a grid of cells, each either
 * enabled or disabled. It can produce a next state based on the state of each
 * cell
 */
class Automaton {
  /**
   * Creates an automaton with the specified options
   * @param {Object} options The options to create a new automaton with
   * @param {NextCellStateFunction} options.produceNextCellState A function
   * which is applied to each of the cells in the automaton and produces a new
   * Cell
   * @param {number} [options.width=1] The width of the automaton. Ignored if
   * `cells` is present
   * @param {number} [options.height=1] The height of the automaton. Ignored if
   * `cells` is present
   * @param {Array<Array<Cell>>} [cells] A two-dimenisonal array of Cells to be
   * used as the initial state of the automaton. Defaults to a 1x1 array of
   * Cells which are disabled
   *
   * @throws {TypeError} If produceNextCellState is missing or not a function
   * @throws {RangeError} If width or height are <= 0
   * @throws {TypeError} If any member of `cells` is not an instance of the Cell
   * class
   */
  constructor({ produceNextCellState, width = 1, height = 1, cells }) {
    if (typeof produceNextCellState !== 'function') {
      throw new TypeError('produceNextCellState must be a function')
    }

    if (width <= 0 || height <= 0) {
      throw new RangeError('width and height must be greater than 0')
    }

    if (width && height && !cells) {
      cells = Array.from(new Array(height), () =>
        Array.from(
          new Array(width),
          () =>
            new Cell({
              enabled: false,
            }),
        ),
      )
    }

    throwIfMembersAreNotOfType({
      array: cells,
      type: Cell,
      errorMessage:
        'All members of the cells array must be instances of the Cell class',
      recurse: true,
    })

    /**
     * A two dimensional array representing the cells in the automaton
     * @name Automaton#cells
     * @type {Array<Array<Cell>>}
     */
    this.cells = cells

    this.produceNextCellState = produceNextCellState
  }

  /**
   * Get the next state of the automaton with all rules applied
   * @return {Automaton} The automaton with the updated state
   */
  getNextState() {
    const newCells = this.cells.map((cellRow, row) =>
      cellRow.map((cell, column) =>
        this.produceNextCellState(cell.enabled, this, row, column),
      ),
    )

    return new Automaton({
      produceNextCellState: this.produceNextCellState,
      cells: newCells,
    })
  }
}

/**
 * Checks an array to see if it's members are of a desired type, and throws a
 * TypeError with the desired message if any of them are not
 * @private
 * @param {Object} options The options
 * @param {Array} options.array The array to check
 * @param {Any} [options.errorMessage='Array member is not of the desired type']
 * The message to use when throwing the error
 * @param {boolean} [options.recurse=false] If true, will not throw if any members are
 * arrays, but will instead check each of their members as well
 */
function throwIfMembersAreNotOfType(options) {
  const {
    array,
    type,
    errorMessage = 'Array member is not of the desired type',
    recurse = false,
  } = options

  array.forEach(member => {
    if (Array.isArray(member) && recurse) {
      throwIfMembersAreNotOfType({
        ...options,
        array: member,
      })
    } else if (!(member instanceof type)) {
      throw new TypeError(errorMessage)
    }
  })
}

/**
 * @callback NextCellStateFunction
 * @param {boolean} enabled Whether or not the current cell is enabled
 * @param {Automaton} automaton The state of the automaton
 * @param {number} row The row, or y value, that the current cell is in
 * @param {number} columm The column, or x value, that the current cell
 * @return {Cell} A cell with the desired state
 */

export default Automaton
