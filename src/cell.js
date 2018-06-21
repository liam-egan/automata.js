/**
 * A cell in the automaton
 * @memberof module:Automata
 * @typedef {Object} Cell
 * @property {boolean} enabled If the cell is enabled/"alive"
 */

/**
 * Factory for creating Cell objects
 * @memberof module:Automata
 * @param {boolean | Object} [options=false] Options for creating the cell. If
 * passed a boolean, it is equivalent to passing the same boolean as the value
 * of the `enabled` field
 * @param {boolean} [options.enabled=false] Whether or not the cell is enabled
 * @return {Cell}
 *
 * @example
 * const c = automata.Cell()
 *
 * @example
 * const c = automata.Cell(false)
 *
 * @example
 * const c = automata.Cell({
 *   enabled: false
 * })
 */
function Cell(options = false) {
  if (typeof options !== 'object') {
    options = {
      enabled: !!options,
    }
  }

  options = {
    ...Cell.defaultOptions,
    ...options,
  }

  const { enabled } = options
  return {
    enabled: !!enabled,
  }
}

Cell.defaultOptions = {}

export default Cell
