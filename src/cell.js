/**
 * A single cell in an automaton
 */
class Cell {
  static get defaultConstructorOptions() {
    return {}
  }
  /**
   * @param {boolean|Object} [options=false] The options for creating the cell. If passed a
   * boolean, it is equivalent to passing an object with an `enabled` field set
   * to the same boolean
   * @param {boolean} options.enabled The state of the cell, either enabled
   * or disabled
   *
   * @example
   * const c = new Cell()
   *
   * @example
   * const c = new Cell(false)
   *
   * @example
   * const c = new Cell({
   *   enabled: false
   * })
   */
  constructor(options = false) {
    if (typeof options !== 'object') {
      options = {
        enabled: !!options,
      }
    }

    options = {
      ...Cell.defaultConstructorOptions,
      ...options,
    }

    /**
     * Represents the current state of the cell. Enabled or disabled, alive or
     * not alive
     * @name Cell#enabled
     * @type {boolean}
     */
    this.enabled = options.enabled
  }
}

export default Cell
