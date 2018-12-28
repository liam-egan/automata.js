import { expect } from 'chai'
import Automaton from '../../src/automaton'
import Cell from '../../src/cell'
import produceNextConwayCellState from '../../src/next-cell-state-functions/produceNextConwayCellState'

describe('produceNextConwayCellState', () => {
  it('produces known Conway patterns like the block', () => {
    // prettier-ignore
    const seed = [
      [new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
      [new Cell(false), new Cell(true), new Cell(true), new Cell(false)],
      [new Cell(false), new Cell(true), new Cell(true), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
    ]

    const automaton = new Automaton({
      produceNextCellState: produceNextConwayCellState,
      cells: seed,
    })
    const actualAfterOneCycle = automaton.getNextState()
    const actualAfterFiveCycles = actualAfterOneCycle
      .getNextState()
      .getNextState()
      .getNextState()
      .getNextState()

    expect(actualAfterOneCycle.cells).to.eql(seed)
    expect(actualAfterFiveCycles.cells).to.eql(seed)
  })

  it('produces known Conway patterns like the blinker', () => {
    // prettier-ignore
    const seed = [
      [new Cell(false), new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(true), new Cell(false), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(true), new Cell(false), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(true), new Cell(false), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
    ]
    // prettier-ignore
    const expectedAfterOneCycle = [
      [new Cell(false), new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
      [new Cell(false), new Cell(true), new Cell(true), new Cell(true), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
    ]

    const automaton = new Automaton({
      produceNextCellState: produceNextConwayCellState,
      cells: seed,
    })
    const actualAfterOneCycle = automaton.getNextState()
    const actualAfterTwoCycles = actualAfterOneCycle.getNextState()

    expect(actualAfterOneCycle.cells).to.eql(expectedAfterOneCycle)
    expect(actualAfterTwoCycles.cells).to.eql(seed)
  })

  it('produces known Conway patters like the glider', () => {
    // prettier-ignore
    const seed = [
      [new Cell(false), new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(true), new Cell(false), new Cell(false)],
      [new Cell(true), new Cell(false), new Cell(true), new Cell(false), new Cell(false)],
      [new Cell(false), new Cell(true), new Cell(true), new Cell(false), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
    ]
    // prettier-ignore
    const expectedAfterOneCycle = [
      [new Cell(false), new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
      [new Cell(false), new Cell(true), new Cell(false), new Cell(false), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(true), new Cell(true), new Cell(false)],
      [new Cell(false), new Cell(true), new Cell(true), new Cell(false), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
    ]
    // prettier-ignore
    const expectedAfterTwoCycles = [
      [new Cell(false), new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(true), new Cell(false), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(false), new Cell(true), new Cell(false)],
      [new Cell(false), new Cell(true), new Cell(true), new Cell(true), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
    ]
    // prettier-ignore
    const expectedAfterThreeCycles = [
      [new Cell(false), new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
      [new Cell(false), new Cell(true), new Cell(false), new Cell(true), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(true), new Cell(true), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(true), new Cell(false), new Cell(false)],
    ]
    // prettier-ignore
    const expectedAfterFourCycles = [
      [new Cell(false), new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(false), new Cell(true), new Cell(false)],
      [new Cell(false), new Cell(true), new Cell(false), new Cell(true), new Cell(false)],
      [new Cell(false), new Cell(false), new Cell(true), new Cell(true), new Cell(false)],
    ]

    const automaton = new Automaton({
      produceNextCellState: produceNextConwayCellState,
      cells: seed,
    })
    const actualAfterOneCycle = automaton.getNextState()
    const actualAfterTwoCycles = actualAfterOneCycle.getNextState()
    const actualAfterThreeCycles = actualAfterTwoCycles.getNextState()
    const actualAfterFourCycles = actualAfterThreeCycles.getNextState()

    expect(actualAfterOneCycle.cells).to.eql(expectedAfterOneCycle)
    expect(actualAfterTwoCycles.cells).to.eql(expectedAfterTwoCycles)
    expect(actualAfterThreeCycles.cells).to.eql(expectedAfterThreeCycles)
    expect(actualAfterFourCycles.cells).to.eql(expectedAfterFourCycles)
  })
})
