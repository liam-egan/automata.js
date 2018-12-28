import { expect } from 'chai'
import Automaton from '../../src/automaton'
import Cell from '../../src/cell'
import produceNextRule30CellState from '../../src/next-cell-state-functions/produceNextRule30CellState'

describe('produceNextRule30CellState', () => {
  it('produces a disabled cell when the neighbor pattern is 111', () => {
    // prettier-ignore
    const seed = [
      [new Cell(true), new Cell(true), new Cell(true)],
      [new Cell(false), new Cell(false), new Cell(false)],
    ]
    const automaton = new Automaton({
      produceNextCellState: produceNextRule30CellState,
      cells: seed,
    })
    const actual = automaton.getNextState().cells[1][1]

    expect(actual.enabled).to.equal(false)
  })

  it('produces a disabled cell when the neighbor pattern is 110', () => {
    // prettier-ignore
    const seed = [
      [new Cell(true), new Cell(true), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(false)],
    ]
    const automaton = new Automaton({
      produceNextCellState: produceNextRule30CellState,
      cells: seed,
    })
    const actual = automaton.getNextState().cells[1][1]

    expect(actual.enabled).to.equal(false)
  })

  it('produces a disabled cell when the neighbor pattern is 101', () => {
    // prettier-ignore
    const seed = [
      [new Cell(true), new Cell(false), new Cell(true)],
      [new Cell(false), new Cell(false), new Cell(false)],
    ]
    const automaton = new Automaton({
      produceNextCellState: produceNextRule30CellState,
      cells: seed,
    })
    const actual = automaton.getNextState().cells[1][1]

    expect(actual.enabled).to.equal(false)
  })

  it('produces a disabled cell when the neighbor pattern is 000', () => {
    // prettier-ignore
    const seed = [
      [new Cell(false), new Cell(false), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(false)],
    ]
    const automaton = new Automaton({
      produceNextCellState: produceNextRule30CellState,
      cells: seed,
    })
    const actual = automaton.getNextState().cells[1][1]

    expect(actual.enabled).to.equal(false)
  })

  it('produces and enabled cell when the neighbor pattern is 100', () => {
    // prettier-ignore
    const seed = [
      [new Cell(true), new Cell(false), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(false)],
    ]
    const automaton = new Automaton({
      produceNextCellState: produceNextRule30CellState,
      cells: seed,
    })
    const actual = automaton.getNextState().cells[1][1]

    expect(actual.enabled).to.equal(true)
  })

  it('produces and enabled cell when the neighbor pattern is 011', () => {
    // prettier-ignore
    const seed = [
      [new Cell(false), new Cell(true), new Cell(true)],
      [new Cell(false), new Cell(false), new Cell(false)],
    ]
    const automaton = new Automaton({
      produceNextCellState: produceNextRule30CellState,
      cells: seed,
    })
    const actual = automaton.getNextState().cells[1][1]

    expect(actual.enabled).to.equal(true)
  })

  it('produces and enabled cell when the neighbor pattern is 010', () => {
    // prettier-ignore
    const seed = [
      [new Cell(false), new Cell(true), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(false)],
    ]
    const automaton = new Automaton({
      produceNextCellState: produceNextRule30CellState,
      cells: seed,
    })
    const actual = automaton.getNextState().cells[1][1]

    expect(actual.enabled).to.equal(true)
  })

  it('produces and enabled cell when the neighbor pattern is 001', () => {
    // prettier-ignore
    const seed = [
      [new Cell(false), new Cell(false), new Cell(true)],
      [new Cell(false), new Cell(false), new Cell(false)],
    ]
    const automaton = new Automaton({
      produceNextCellState: produceNextRule30CellState,
      cells: seed,
    })
    const actual = automaton.getNextState().cells[1][1]

    expect(actual.enabled).to.equal(true)
  })
})
